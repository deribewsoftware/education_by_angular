import { Course } from "../courses/course";
import { Book } from "../libraries/book/book";
import { Video } from "../libraries/video/video";

export interface Account {
  id: number
  accountName: string
  accountLogo: string
  accountBanner: any
  userId: number
  createdAt: string
  updatedAt: string
  videos: Video[]
  courses: Course[]
  books: Book[]
  subscribers: Subscriber[]
  subscriberCount: number
  coursesCount: number
  videosCount: number
  booksCount: number

  }




  export interface Subscriber {
    id: number
    createdAt: string
    updatedAt: string
    accountId: number
    userId: number
  }
