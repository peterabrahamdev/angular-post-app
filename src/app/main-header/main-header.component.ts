import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css',
})
export class MainHeaderComponent {
  constructor(private router: Router){}
  goHome() {
    this.router.navigate(['..']);
  }
}
