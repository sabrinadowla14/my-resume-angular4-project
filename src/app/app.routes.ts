import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoverLetterComponent } from './coverletter/coverletter.component';
import { BlogsComponent } from './blogs/blogs.component';

export const router: Routes = [

    { path: 'coverletter', component: CoverLetterComponent },
    { path: 'blogs', component: BlogsComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
