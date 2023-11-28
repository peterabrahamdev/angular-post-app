import { Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: '', title: 'Angular Poster', component: PostsComponent},
    {path: 'create-post', title: 'Create post', component: NewPostComponent},
    {path: '**', title: '404', component: PageNotFoundComponent}
];
