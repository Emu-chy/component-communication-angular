import { Component, Input } from '@angular/core';
import { IBlog } from '../blog.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  // using input decorator for pass the component data child to parent
  @Input({ required: true }) blog!: IBlog;
}
