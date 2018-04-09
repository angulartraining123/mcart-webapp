import { Component, OnInit } from '@angular/core';
import { AngularModal } from './angular-modal';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
public pageTitle: string = "Welcome";
showLogin:any = false;
courses: AngularModal[] = [
  { id: 1, name: "TypeScript" },
  { id: 2, name: "Angular" },
  { id: 3, name: "Node JS" },
  { id: 4, name: "TypeScript" }
];
value: number = 0;

  constructor() { }

  ngOnInit() {
    let object = new AngularModal(5,'React');
    this.courses.push(object);
    this.courses.forEach(result=>{
      console.log("ID: "+result.id+" Name: "+result.name);
    })
    console.log(object.name);
  }
  nextChoice() {
    this.value++;
  }


}
