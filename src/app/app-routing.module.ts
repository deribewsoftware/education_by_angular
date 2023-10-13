import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './accounts/account/account.component';
import { CourselistComponent } from './courses/courselist/courselist.component';
import { MyAccountComponent } from './accounts/my-account/my-account.component';
import { CreateAccountComponent } from './accounts/create-account/create-account.component';
import { UpdateAccountComponent } from './accounts/update-account/update-account.component';
import { WelcomepageComponent } from './welcomePages/welcomepage/welcomepage.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';
import { MyprofileComponent } from './users/myprofile/myprofile.component';
import { LessonDetailComponent } from './courses/lessons/lesson-detail/lesson-detail.component';
import { CreateSavingAccountComponent } from './saving/create-saving-account/create-saving-account.component';
import { SavingAccountComponent } from './saving/saving-account/saving-account.component';
import { ExamComponent } from './exams/exam/exam.component';
import { QuestionsComponent } from './exams/questions/questions.component';
import { EueeComponent } from './exams/euee/euee.component';
import { ExitComponent } from './exams/exit/exit.component';
import { ExamPaymentComponent } from './payments/exam-payment/exam-payment.component';
import { HighschoolComponent } from './courses/highschool/highschool.component';
import { UniversityComponent } from './courses/university/university.component';
import { OthersComponent } from './courses/others/others.component';
import { CoursePaymentComponent } from './payments/course-payment/course-payment.component';
import { VideoComponent } from './libraries/video/video.component';
import { BookComponent } from './libraries/book/book.component';
import { LibraryComponent } from './libraries/library/library.component';
import { VideoPlayerComponent } from './libraries/video-player/video-player.component';
import { BookReaderComponent } from './libraries/book-reader/book-reader.component';
import { FavouriteTutorialComponent } from './myTutorials/favourite-tutorial/favourite-tutorial.component';
import { BoughtTutorialComponent } from './myTutorials/bought-tutorial/bought-tutorial.component';
import { SubscribeChannelsComponent } from './accounts/subscribe-channels/subscribe-channels.component';
import { VideoPaymentComponent } from './payments/video-payment/video-payment.component';
import { BookPaymentComponent } from './payments/book-payment/book-payment.component';
import { AdminDashbordComponent } from './Dashboard/admin-dashbord/admin-dashbord.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LearnersComponent } from './learners/learners.component';
import { ChaptersListComponent } from './courses/chapters/chapters-list/chapters-list.component';
import { CreateChapterComponent } from './courses/chapters/create-chapter/create-chapter.component';
import { LessonCreateComponent } from './courses/lessons/lesson-create/lesson-create.component';
import { LessonEditComponent } from './courses/lessons/lesson-edit/lesson-edit.component';
import { CourseEditComponent } from './courses/course-edit/course-edit.component';
import { ContentCreateComponent } from './courses/lessons/contents/content-create/content-create.component';
import { LessonAnalysisComponent } from './courses/lesson/lesson-analysis/lesson-analysis.component';
import { ContentEditComponent } from './courses/lessons/contents/content-edit/content-edit.component';
import { LessonRefreshComponent } from './courses/lessons/lesson-refresh/lesson-refresh.component';
import { LessonVideoComponent } from './courses/lessons/lesson-video/lesson-video.component';
import { SubjectListComponent } from './courses/subjects/subject-list/subject-list.component';
import { CourselistRefreshComponent } from './courses/courselist-refresh/courselist-refresh.component';
import { SubjectsRefreshComponent } from './courses/subjects-refresh/subjects-refresh.component';
import { UniverisitiesRefreshComponent } from './courses/univerisities-refresh/univerisities-refresh.component';

const routes: Routes = [
  {
    path: '', component: WelcomepageComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'login', component: LoginComponent
  },


  {
    path: 'account/:id', component: AccountComponent
  },



  //courses All
  {
    path: 'courses', component: CourselistComponent
  },

  {
    path: 'courses/highschool', component: HighschoolComponent
  }
  ,
  {
    path: 'courses/university/:category', component:UniversityComponent
  },
  //courses/university refresher
  {
    path: 'courses/university/refresher/:categoryId', component:UniverisitiesRefreshComponent
  }
  ,
  {
    path: 'course/:id', component: CourseDetailComponent
  }
  ,







  {
    path: 'myaccount', component: MyAccountComponent
  },
  {
    path: 'myprofile', component: MyprofileComponent
  },
  {
    path: 'createaccount', component: CreateAccountComponent
  },

  {
    path: 'updateaccount', component: UpdateAccountComponent
  },


  //saving accounts
  {
    path: 'savingaccount', component: SavingAccountComponent
  },
  {
    path: 'createsavingaccount', component: CreateSavingAccountComponent
  },
//Exams
{
  path: 'exams', component: ExamComponent
},
{
  path: 'questions/:examsubject/:id', component: QuestionsComponent
},
//euee
{
  path: 'exams/:examtype/:subject', component:EueeComponent
},

//Exit

{
  path: 'exit', component:ExitComponent
},
//Exam payment
{
  path: 'exam/payment/:id', component:ExamPaymentComponent
},
//Video payment
{
  path: 'video/payment/:id', component:VideoPaymentComponent
},

//Book Payment
{
  path: 'book/payment/:id', component:BookPaymentComponent
},
//error page
{
  path: 'error', component:ErrorPageComponent
},



{
  path: 'payment/course/:id', component:CoursePaymentComponent
},
//videos path
{
  path: 'video/:department', component:VideoComponent
},
//books path
{
  path: 'book/:department', component:BookComponent
},
//library
{
  path: 'library', component:LibraryComponent
},

//video player
{
  path: 'video/player/:categoryId/:videoId', component:VideoPlayerComponent
},
//book reader
{
  path: 'book/reader/:categoryId/:bookId', component:BookReaderComponent
},

//myfavourites list

{
  path: 'favourite', component:FavouriteTutorialComponent
},


// my tutorials

{
  path: 'mytutorials', component:BoughtTutorialComponent
},


// my subscriptions channels
{
  path: 'subscribtions', component:SubscribeChannelsComponent
},

// Dashboard
{
  path: 'dashboard', component:AdminDashbordComponent
},

//learners
{
  path: 'learners/course/:courseId', component:LearnersComponent
},
//chapters list
{
  path: 'chapterslist/:courseId', component:ChaptersListComponent
},
//add chapter
{
  path: 'addchapter/:courseId', component:CreateChapterComponent
},

//edit Course
{
  path: 'edit/course/:courseId', component:OthersComponent
},
//create lesson
{
  path:'lesson/create/:courseId/:chapterId',component:LessonCreateComponent
},

//lesson edit component
{
  path:'lesson/edit/:courseId/:chapterId/:lessonId',component:LessonEditComponent
},

//lesson detail
{
  path: 'course/chapter/:courseId/:chapterId/:lessonId', component: LessonDetailComponent
}
,


//course edit component
{
  path:'course/edit/:courseId',component:CourseEditComponent
}
,

//content create component
{
  path:'course/chapter/lesson/:lessonId',component:ContentCreateComponent},

// lesson analaysis
{
  path:'chapter/lesson/:chapterId/:lessonId',component:LessonAnalysisComponent,
},
//content edit

{path:'lesson/content/:lessonId/:contentId',component:ContentEditComponent},

//lesson refresh
{path:'lesson/refresh/:courseId/:chapterId/:lessonId',component:LessonRefreshComponent},

//lessons video
{path:'course/chapter/lesson/video/:courseId/:chapterId/:lessonId',component:LessonVideoComponent},
// lesson books
{path:'course/chapter/lesson/book/:courseId/:chapterId/:lessonId',component:BookComponent},
//subject lists
{path:'course/subject/:categoryId/:subjectId',component:SubjectListComponent},
//refresh Pages
//courselistRefreshPage
{path:'course/list/refresh',component:CourselistRefreshComponent},
// subject refresh
{path:'course/subject/refresher/:categoryId/:subjectId',component:SubjectsRefreshComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
