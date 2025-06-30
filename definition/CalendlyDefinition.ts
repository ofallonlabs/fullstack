type CalendlyAuthTokenType = {
    access_token: string,
    refresh_token: string,
    owner: string,
    token_type: string,
    expires_in: number
    scope: string,
    created_at: number
    organization: string
}

type CalendlyCustomQuestion = {
  answer_choices: any[];
  enabled: boolean;
  include_other: boolean;
  name: string;
  position: number;
  required: boolean;
  type: string;
};

type CalendlyLocation = {
  kind: string;
};

type CalendlyProfile = {
  name: string;
  owner: string;
  type: string;
};

type CalendlyEventType = {
  active: boolean;
  admin_managed: boolean;
  booking_method: string;
  color: string;
  created_at: string;
  custom_questions: CalendlyCustomQuestion[];
  deleted_at: string | null;
  description_html: string | null;
  description_plain: string | null;
  duration: number;
  duration_options: any | null;
  internal_note: string | null;
  kind: string;
  locale: string;
  locations: CalendlyLocation[];
  name: string;
  pooling_type: string | null;
  position: number;
  profile: CalendlyProfile;
  scheduling_url: string;
  secret: boolean;
  slug: string;
  type: string;
  updated_at: string;
  uri: string;
};

type CalendlyPagination = {
  count: number;
  next_page: string | null;
  next_page_token: string | null;
  previous_page: string | null;
  previous_page_token: string | null;
};

type CalendlyEventTypeResponse = {
  collection: CalendlyEventType[];
  pagination: CalendlyPagination;
};
 

type CalendlyBookingUrlResponse = {
  resource: {
    booking_url: string;
    owner: string;
    owner_type: 'EventType';
  };
};


type CalendlyEventListType = {
  name: string;
  booking_url: string;
}

export type {
    CalendlyAuthTokenType,
    CalendlyEventTypeResponse,
    CalendlyBookingUrlResponse,
    CalendlyEventListType
}