import "server-only";
import { CalendlyAuthTokenType, CalendlyEventTypeResponse, CalendlyBookingUrlResponse } from "@/definition/CalendlyDefinition";
import { printError } from "@/utils/Utils";
import { updateMentorCalendlyToken } from "@/lib/db/services/mentor-service";


function base64StringConvert(clientId: string, clientSecret: string): string {
    const basicAuthString = `${clientId}:${clientSecret}`;
    return Buffer.from(basicAuthString).toString('base64');
}

async function getAccessTokenFromCode(code: string) : Promise<CalendlyAuthTokenType>{

  const clientId = process.env.CALENDLY_CLIENT_ID!;
  const clientSecret = process.env.CALENDLY_SECRET_ID!;
  const redirectUri = process.env.CALENDLY_CALLBACK_URL!; 

  const response = await fetch('https://auth.calendly.com/oauth/token',  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      "Accept": "application/json",
      Authorization: `Basic ${base64StringConvert(clientId, clientSecret)}`
    },
    body: new URLSearchParams({
        "grant_type": "authorization_code",
        "code": code,
        "redirect_uri": redirectUri,
        "client_id": clientId,
        "client_secret": clientSecret,
    }),
  });


    if (!response.ok) {
        throw new Error(`Failed to fetch access token: ${response.statusText} - ${response.status}`);
    }

    const data = await response.json() as CalendlyAuthTokenType;
    return data;
}

async function refreshAccessToken(refreshToken : string) : Promise<CalendlyAuthTokenType | null> {

  const clientId = process.env.CALENDLY_CLIENT_ID!;
  const clientSecret = process.env.CALENDLY_SECRET_ID!;
  const redirectUri = process.env.CALENDLY_CALLBACK_URL!; 

  const response = await fetch('https://auth.calendly.com/oauth/token',  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      "Accept": "application/json",
      Authorization: `Basic ${base64StringConvert(clientId, clientSecret)}`
    },
    body: new URLSearchParams({
        "grant_type": "refresh_token",
        "refresh_token": refreshToken,
        "redirect_uri": redirectUri,
        "client_id": clientId,
        "client_secret": clientSecret,
    }),
  });

  if (!response.ok) {
    printError("refreshAccessToken", new Error(`Failed to refresh the access token: ${response.statusText} - ${response.status}`))
    return null;
  }

  const data = await response.json() as CalendlyAuthTokenType;
  return data; 

}

async function introspectAccessToken(accessToken: string, refreshToken: string) : Promise<CalendlyAuthTokenType | null> {


  const clientId = process.env.CALENDLY_CLIENT_ID!;
  const clientSecret = process.env.CALENDLY_SECRET_ID!;

  const response = await fetch('https://auth.calendly.com/oauth/introspect',  {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        "Accept": "application/json",
      },
      body: new URLSearchParams({
          "token": accessToken,
          "client_id": clientId,
          "client_secret": clientSecret,
      }),
    });

    if (!response.ok) {
      printError("introspectAccessToken", new Error(`Failed to fetch introspect access token: ${response.statusText} - ${response.status}`))
      return null;
    }

    const data = await response.json() as { active? : boolean };

    if(data && data?.active){
      return null;
    }else{
      return await refreshAccessToken(refreshToken);
    }
  
}

async function getEventTypes(accessToken: string, refreshToken: string, ownerUrl: string, userId?:string): Promise<{ data: CalendlyEventTypeResponse; newToken?: CalendlyAuthTokenType } | null> {
  const buildUrl = (base: string, params: Record<string, string>) => {
    const query = new URLSearchParams(params).toString();
    return `${base}?${query}`;
  };

  const fetchEventTypes = async (token: string) => {
    const url = buildUrl(`https://api.calendly.com/event_types`, { user: ownerUrl });
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return res;
  };

  let response = await fetchEventTypes(accessToken);

  if (response.status != 200) {
    const newToken = await refreshAccessToken(refreshToken);

    if(newToken && newToken.access_token && userId){

      await updateMentorCalendlyToken(userId,newToken);

      response = await fetchEventTypes(newToken?.access_token);
      const data = await response.json() as CalendlyEventTypeResponse;
      return { data, newToken };
    }else{
      return null;
    }
  }else{
    const data = await response.json() as CalendlyEventTypeResponse;
    return { data };
  }


};

async function getEventBookingUrl(accessToken: string,refreshToken: string, eventUrl: string): Promise<{ data: CalendlyBookingUrlResponse; newToken?: CalendlyAuthTokenType } | null> {
  
  const payload = {
    max_event_count: 1,
    owner: eventUrl,
    owner_type: 'EventType'
  };

  const fetchSchedulingLink = async (token: string) => {
    const response = await fetch(`https://api.calendly.com/scheduling_links`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    return response;
  };

  let response = await fetchSchedulingLink(accessToken);

  if (response.status === 401) {

    const newToken = await refreshAccessToken(refreshToken);

    if(newToken && newToken.access_token){

      response = await fetchSchedulingLink(newToken.access_token);
      const data = await response.json() as CalendlyBookingUrlResponse;

      return { data, newToken };

    }else{
      
      return null;

    }

  }else{

    const data = await response.json() as CalendlyBookingUrlResponse;

    return { data };

  }


};

async function getUserData(accessToken: string) {
  const response = await fetch('https://api.calendly.com/users/me',  {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch user data: ${response.statusText}`);
  }

  return await response.json();
}

export {
    getAccessTokenFromCode,
    getUserData,
    getEventTypes,
    introspectAccessToken,
    getEventBookingUrl
}