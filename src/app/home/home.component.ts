import { Component } from '@angular/core';
import { PostDetailsComponent } from "../post-details/post-details.component";
import { PostListComponent } from '../post-list/post-list.component';

@Component({
  selector: 'app-home',
  imports: [PostDetailsComponent, PostListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
