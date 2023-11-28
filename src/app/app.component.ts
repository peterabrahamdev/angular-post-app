import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainHeaderComponent } from "./main-header/main-header.component";
import { PostsComponent } from "./posts/posts.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, MainHeaderComponent, PostsComponent]
})
export class AppComponent {
  title = 'angular-poster';
}
