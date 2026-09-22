export interface LoginUser {
    PhoneNumber:string , 
    Password: string,
}

export interface SignupUser {
    Id:string
    FullName: string;
    PhoneNumber: string;
    Email: string;
    Password: string;
    ConfirmPassword: string;
    PhotoUrl: string;
    AgeGroup: string;
    Gender: string;
}

export interface MemberType {
    id?:string
    fullName: string;
    phoneNumber: string;
    email: string;
    photoUrl: string;
    ageGroup: string;
    gender: string;
    isActive: boolean,
    activeSubscription: ActiveSubscriptionType ,
    nfcUrl:string,
    role:string
}

export interface ActiveSubscriptionType {
    id: number;
    subscriptionPlanId: number;
    planName: string;
    price: number;
    startDate: number ;
    endDate: number;
    isActive: boolean;
}


export interface subType {
    id:string , 
    name:string , 
    isActive:boolean , 
    durationInDays:number 
    targetAgeGroup:number, 
    price: number,
    startDate: string,
    endDate: string
}

export interface selectedSubType {
    id:string , 
    name:string , 
    isActive:boolean , 
    price: number
    startDate: string,
    endDate: string
}

export interface NewSub {
    id?:string , 
    name:string , 
    durationInDays:number 
    targetAgeGroup:number, 
    price:number
}
//plan

export interface PlanType{
    id?:string , 
    name:string , 
    durationInDays:number 
    targetAgeGroup:number, 
    price:number
}

export const verseArray:string[] = [
    "شَهَادَاتُكَ",
    "ثَابِتَةٌ",
    "جِدًّا.",
    "بِبَيْتِكَ",
    "تَلِيقُ",
    "الْقَدَاسَةُ",
    "يَا",
    "رَبُّ",
    "إِلَى",
    "طُولِ",
    "الأَيَّامِ"
];

export const aboutWords = [
    "Lorem", "ipsum,", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit.",
    "Inventore", "saepe", "facere", "quo", "recusandae,", "molestias", "earum",
    "blanditiis", "ratione", "illo!", "Dolorum", "nesciunt", "voluptatum", "veniam?",
    "Molestias,", "impedit", "vel."
];