import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccountComponent } from './accounts/account/account.component';
import { MyAccountComponent } from './accounts/my-account/my-account.component';
import { CreateAccountComponent } from './accounts/create-account/create-account.component';
import { UpdateAccountComponent } from './accounts/update-account/update-account.component';
import { CourselistComponent } from './courses/courselist/courselist.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { WelcomepageComponent } from './welcomePages/welcomepage/welcomepage.component';
import {HttpClientModule } from '@angular/common/http';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { SignupComponent } from './users/signup/signup.component';
import { LoginComponent } from './users/login/login.component';
import { MyprofileComponent } from './users/myprofile/myprofile.component';
import { MaterialModule } from 'src/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { LessonDetailComponent } from './courses/lessons/lesson-detail/lesson-detail.component';
import { AccountsCardComponent } from './components/accounts-card/accounts-card.component';
import { MyCourseCardComponent } from './components/my-course-card/my-course-card.component';
import { AccountsCourseCardComponent } from './components/accounts-course-card/accounts-course-card.component';
import { SavingAccountComponent } from './saving/saving-account/saving-account.component';
import { ExamComponent } from './exams/exam/exam.component';
import { QuestionsComponent } from './exams/questions/questions.component';
import { CreateSavingAccountComponent } from './saving/create-saving-account/create-saving-account.component';
import { ExamsCardComponent } from './components/exams-card/exams-card.component';
import { QuestionsCardComponent } from './components/questions-card/questions-card.component';
import { EueeComponent } from './exams/euee/euee.component';
import { FreshmanComponent } from './exams/freshman/freshman.component';
import { ExitComponent } from './exams/exit/exit.component';
import { CocComponent } from './exams/coc/coc.component';
import { ExamPaymentComponent } from './payments/exam-payment/exam-payment.component';
import { HighschoolComponent } from './courses/highschool/highschool.component';
import { UniversityComponent } from './courses/university/university.component';
import { OthersComponent } from './courses/others/others.component';
import { CoursePaymentComponent } from './payments/course-payment/course-payment.component';
import { LibraryComponent } from './libraries/library/library.component';
import { VideoComponent } from './libraries/video/video.component';
import { BookComponent } from './libraries/book/book.component';
import { VideoPlayerComponent } from './libraries/video-player/video-player.component';
import { BookReaderComponent } from './libraries/book-reader/book-reader.component';
import { SubscribeChannelsComponent } from './accounts/subscribe-channels/subscribe-channels.component';
import { BoughtTutorialComponent } from './myTutorials/bought-tutorial/bought-tutorial.component';
import { FavouriteTutorialComponent } from './myTutorials/favourite-tutorial/favourite-tutorial.component';
import { VideoPaymentComponent } from './payments/video-payment/video-payment.component';
import { BookPaymentComponent } from './payments/book-payment/book-payment.component';
import { AdminDashbordComponent } from './Dashboard/admin-dashbord/admin-dashbord.component';
import { CreateCourseComponent } from './courses/create-course/create-course.component';
import { CreateVideoComponent } from './libraries/video/create-video/create-video.component';
import { CreateBookComponent } from './libraries/book/create-book/create-book.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoadingComponent } from './loading/loading.component';
import { LearnersComponent } from './learners/learners.component';
import { ChaptersListComponent } from './courses/chapters/chapters-list/chapters-list.component';
import { CreateChapterComponent } from './courses/chapters/create-chapter/create-chapter.component';
import { LessonEditComponent } from './courses/lessons/lesson-edit/lesson-edit.component';
import { LessonCreateComponent } from './courses/lessons/lesson-create/lesson-create.component';
import { CourseEditComponent } from './courses/course-edit/course-edit.component';
import { ContentCreateComponent } from './courses/lessons/contents/content-create/content-create.component';
import { LessonAnalysisComponent } from './courses/lesson/lesson-analysis/lesson-analysis.component';
import { ContentEditComponent } from './courses/lessons/contents/content-edit/content-edit.component';
import { LessonRefreshComponent } from './courses/lessons/lesson-refresh/lesson-refresh.component';
import { LessonVideoComponent } from './courses/lessons/lesson-video/lesson-video.component';
import { NextDirectDirective } from './courses/directives/next-direct.directive';
import { PrevDirectDirective } from './courses/directives/prev-direct.directive';
import { SubjectListComponent } from './courses/subjects/subject-list/subject-list.component';
import { CourselistRefreshComponent } from './courses/courselist-refresh/courselist-refresh.component';
import { UniverisitiesRefreshComponent } from './courses/univerisities-refresh/univerisities-refresh.component';
import { SubjectsRefreshComponent } from './courses/subjects-refresh/subjects-refresh.component';
import { AuthRefresherPageComponent } from './auth-refresher-page/auth-refresher-page.component';
import { CardLayoutComponentComponent } from './components/card-layout-component/card-layout-component.component';
@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    MyAccountComponent,
    CreateAccountComponent,
    UpdateAccountComponent,
    CourselistComponent,
    SideNavComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    WelcomepageComponent,
    CourseDetailComponent,
    SignupComponent,
    LoginComponent,
    MyprofileComponent,
    LessonDetailComponent,
    AccountsCardComponent,
    MyCourseCardComponent,
    AccountsCourseCardComponent,
    SavingAccountComponent,
    ExamComponent,
    QuestionsComponent,
    CreateSavingAccountComponent,
    ExamsCardComponent,
    QuestionsCardComponent,
    EueeComponent,
    FreshmanComponent,
    ExitComponent,
    CocComponent,
    ExamPaymentComponent,
    HighschoolComponent,
    UniversityComponent,
    OthersComponent,
    CoursePaymentComponent,
    LibraryComponent,
    VideoComponent,
    BookComponent,
    VideoPlayerComponent,
    BookReaderComponent,
    SubscribeChannelsComponent,
    BoughtTutorialComponent,
    FavouriteTutorialComponent,
    VideoPaymentComponent,
    BookPaymentComponent,
    AdminDashbordComponent,
    CreateCourseComponent,
    CreateVideoComponent,
    CreateBookComponent,
    ErrorPageComponent,
    LoadingComponent,
    LearnersComponent,
    ChaptersListComponent,
    CreateChapterComponent,
    LessonEditComponent,
    LessonCreateComponent,
    CourseEditComponent,
    ContentCreateComponent,
    LessonAnalysisComponent,
    ContentEditComponent,
    LessonRefreshComponent,
    LessonVideoComponent,
    NextDirectDirective,
    PrevDirectDirective,
    SubjectListComponent,
    CourselistRefreshComponent,
    UniverisitiesRefreshComponent,
    SubjectsRefreshComponent,
    AuthRefresherPageComponent,
    CardLayoutComponentComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
