export type MentorProfile = {
    image: string,
    name: string,
    country: string,
    tagline: string,
    job: string,
    website: string,
    aboutme: string   
}

export type ServiceCardData = {
    link: string,
    country: string,
    language: string,
    reviews: number,
    avgratings: number,
    title: string,
    mentorname: string,
    mentorid: number,
    description: string,
    price: string,
}

export type ServiceDetailsCardData = {
    id:number,
    title: string,
    mentorname: string,
    mentorid: number,
    description: string,
    price: string,
    qualifications:string,
    category:string,
    type:string,
    needapproval:boolean,
}

export type MentorCardData = {
    avatar: string,
    link: string,
    country: string,
    language: string,
    reviews: number,
    avgratings: number,
    mentorname: string,
    mentortagline: string,
    mentorid: number,
    servicescount: string,
    serviceminprice: string,
}