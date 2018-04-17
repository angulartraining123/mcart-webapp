import { Component, OnInit } from '@angular/core';
import { Course } from '../modal/course';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  course = new Course(1, 'Angular 2', '4 days');
  submitted = false;

  constructor() { }

  ngOnInit() {
  }
  onSubmit() { this.submitted = true; }


}
