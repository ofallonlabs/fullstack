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


export type {
    CalendlyAuthTokenType
}