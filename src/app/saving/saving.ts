import { User } from "../users/user"

export interface Saving {
  id: number
  balance: number
  userId: number
  createdAt: string
  updatedAt: string
  creator: User
  transactions: Transaction[]
}



export interface Transaction {
  id: number
  createdAt: string
  updatedAt: string
  saveId: number
  userId: number
  bankTransactionId: string
  bankReceipt: string
  saveBalance: number
  status: boolean
  user: User
}


// export interface User {
//   id: number
//   profileImage: string
//   firstName: string
//   lastName: string
//   phone_no: string
//   job: string
//   level_education: string


//   role: string
//   createdAt: string
//   updatedAt: string
// }
