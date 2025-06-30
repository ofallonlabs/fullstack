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

export type ApplicationReviewType = {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    status: string;
    archivedAt: Date | null;
    menteeId: number;
    menteeName: string;
    serviceId: number;
    serviceTitle: string;
    mentorName: string;    
    requestNote: string | null;
    responseMessage: string | null;
    archived: boolean;
    approvedAt: Date | null;
}