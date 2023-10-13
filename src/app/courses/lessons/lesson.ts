import { Chapter } from "../chapters/chapter"
import { Content } from "./contents/content"

export interface Lesson {
  id: number
  createdAt: string
  updatedAt: string
  courseId: number
  title: string
  body: string
  videos: any
  images: any
  summary: string
  questions: string
  chapter:Chapter
  content:Content[]
}
