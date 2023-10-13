import { Account } from "src/app/accounts/account"








export interface VideoCategory{
  id: number
  createdAt: string
  updatedAt: string
  category: string
  subject: string
  grade: any
  videos: Video[]
}

export interface Video {
  id: number
  createdAt: string
  updatedAt: string
  accountId: number
  categoryId: number
  cover: string
  title: string
  uploadFile: string
  description: string
  price: number
  buyers: Buyer[]
  likes: any[]
  views: any[]
  reports: any[]
  account: Account
}


export interface Buyer {
  id: number
  createdAt: string
  updatedAt: string
  videoId: number
  userId: number
}
