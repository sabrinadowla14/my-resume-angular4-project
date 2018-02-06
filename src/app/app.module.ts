import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CoverLetterComponent } from './coverletter/coverletter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { SearchPipe } from './pipes/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
	ProjectDetailsComponent,
	ProjectItemComponent,
    BlogsComponent,
    CoverLetterComponent,
	SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
