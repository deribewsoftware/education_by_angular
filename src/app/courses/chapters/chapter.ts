import { Lesson } from "../lessons/lesson";

export interface Chapter{
  id:number;
  title: string;
  chapter:string;
  courseId:number;
  lessons:Lesson[];
}
