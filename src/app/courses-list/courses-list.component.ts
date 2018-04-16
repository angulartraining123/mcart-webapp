import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
  exportAs: 'courselist'

})
export class CoursesListComponent implements OnInit {
  @Output() onRegister = new EventEmitter;
  courses = [
    { courseId: 1, courseName: "Node JS" },
    { courseId: 2, courseName: "Typescript" },
    { courseId: 3, courseName: "Angular" },
    { courseId: 4, courseName: "React JS" }
  ];
  course: any[];

  constructor() { }

  ngOnInit() {
  }
  
  register(courseName: string) {
    this.onRegister.emit(courseName);
  }

  changeCourse(name: string) {
    this.course = [];
    for (var i = 0; i < this.courses.length; i++) {
      if (this.courses[i].courseName === name) {
        this.course.push(this.courses[i]);
      }
    }
  }

}
