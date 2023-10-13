export interface User {
  id: number
  profileImage: string
  firstName: string
  lastName: string
  phone_no: string
  job: string
  department: string
  password: string

  createdAt: string
  updatedAt: string
  account: Account
  saving: any
  subscribeAccount: any[]
  paymentOnBooks: any[]
  paymentOnCourses: any[]
  paymentOnVideos: any[]
  paymentOnExams: any[]
}

export interface Account {
  id: number
  accountName: string
  accountLogo: string
  accountBanner: string
  userId: number
  createdAt: string
  updatedAt: string
}

export interface Tokens{
  access_token:string;
    refresh_token:string
}
