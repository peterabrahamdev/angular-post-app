import { Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { NewPostComponent } from './new-post/new-post.component';

export const routes: Routes = [
    {path: '', component: PostsComponent},
    {path: 'create-post', component: NewPostComponent}
];
