import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators} from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-new-post',
  standalone: true,
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css',
  imports: [CommonModule, ModalComponent, ReactiveFormsModule],
})
export class NewPostComponent {
  newPostForm = new FormGroup({
    name: new FormControl('', Validators.required),
    text: new FormControl('', Validators.required),
  })

  handleSumbit(){
    alert(
      'A new post has been added! ' + this.newPostForm.value.name + ' | ' + this.newPostForm.value.text
    )
  }
}
