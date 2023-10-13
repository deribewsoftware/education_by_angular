import { Account } from "../accounts/account"
import { ExamsCategory } from "../exams/exam";
import { BookCategory } from "../libraries/book/book";
import { VideoCategory } from "../libraries/video/video";
import { Chapter } from "./chapters/chapter";
import { Lesson } from "./lessons/lesson"

export interface Category{
  id:number;
  category:string;
  courses:CourseCategory[];
  videos:VideoCategory[];
  books:BookCategory[];
  exams:ExamsCategory[];
  videoCount:number;
  courseCount:number;
  bookCount:number;
}


export interface Course {
  id: number
  createdAt: Date;
  updatedAt: string
  accountId: number

  subject: string


  price: number
  cover: string
  likes: any[]
  views: any[]
  buyers: any[]
  chapter: Chapter[]
  account: Account
  likesCount: number
  viewsCount: number
  buyersCount: number
  lessonsCount: number
  subscribersCount:number
}

export interface CourseCategory{

    id: number
    createdAt: string
    updatedAt: string
    accountId: number
    grade: any
    category: string
    department: string
    subject: string
    cover: string
    course: Course[]

}





