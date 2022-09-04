import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.page';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    HomeComponent,
    TaskListComponent,
    TaskItemComponent,
    MyTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
