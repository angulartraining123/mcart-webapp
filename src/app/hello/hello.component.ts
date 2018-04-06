import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `<p>
                Course Name : {{courseName}}
              </p>
              <button (click)="changeName()">Click me to change course</button>`,
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  public courseName: string = "Angular";
  constructor() { }

  ngOnInit() {
  }
  changeName() {
    this.courseName = "TypeScript";
}


}
