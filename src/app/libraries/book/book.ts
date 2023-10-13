import { Account } from "src/app/accounts/account"



export interface BookCategory{
  id: number
  createdAt: string
  updatedAt: string
  category: string
  subject: string
  grade:number
  books: Book[]
}

export interface Book {
  id: number
  createdAt: string
  updatedAt: string
  accountId: number
  categoryId: number
  cover: string
  uploadFile: string
  title: string
  price:number;
  description: string
  account:Account;
}
