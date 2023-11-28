import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from "../modal/modal.component";

@Component({
    selector: 'app-new-post',
    standalone: true,
    templateUrl: './new-post.component.html',
    styleUrl: './new-post.component.css',
    imports: [CommonModule, ModalComponent]
})
export class NewPostComponent {

}
