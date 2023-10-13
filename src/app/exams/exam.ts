

export interface Exam {
  id: number
  createdAt: string
  updatedAt: string
  examCategoryId: number
  year: number
  grade: number
  explanation: string
  title: string
  question: string
  answer: string
  choose: any[]
  examCategory: ExamsCategory
}




export interface ExamsCategory{
  id: number
  createdAt: string
  updatedAt: string
  examType: string
  subject: string

  department?: string
  price: number
  cover: any
  views: any[]
  likes: any[]
  buyers: any[]
  reports: any[]
  exam: any[]
  likesCount: number
  viewsCount: number
  buyersCount: number
  questionsCount: number
}
