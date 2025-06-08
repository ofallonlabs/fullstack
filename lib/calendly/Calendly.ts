import { CalendlyAuthTokenType } from "@/definition/CalendlyDefinition";


function base64StringConvert(clientId: string, clientSecret: string): string {
    const basicAuthString = `${clientId}:${clientSecret}`;
    return Buffer.from(basicAuthString).toString('base64');
}

async function getAccessTokenFromCode(code: string) : Promise<CalendlyAuthTokenType>{

  const clientId = process.env.CALENDLY_CLIENT_ID!;
  const clientSecret = process.env.CALENDLY_SECRET_ID!;
  const redirectUri = process.env.CALENDLY_CALLBACK_URL!;

  console.log(code);   

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
    getUserData
}