import { Component, OnInit } from '@angular/core';
import { AngularModal } from './angular-modal';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
public pageTitle: string = "hi WeLcOme";
showLogin:any = false;
myMessage: string = "Custom Attribute directive test";
show:boolean;
courses: AngularModal[] = [
  { id: 1, name: "TypeScript" },
  { id: 2, name: "Angular" },
  { id: 3, name: "Node JS" },
  { id: 4, name: "TypeScript" }
];
message:string;
value: number = 0;
sortoption: string = "";
  productsList = [
    { productName: "Samsung J7", price: 18000 },
    { productName: "Apple iPhone 6S", price: 60000 },
    { productName: "Lenovo K5 Note", price: 10000 },
    { productName: "Nokia 6", price: 15000 },
    { productName: "Vivo V5 Plus", price: 26000 }
  ];

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
  doSomeLog(){
    console.log("Logged something");
  }
  courseReg(courseName: string) {
    this.message = `Your registration for ${courseName} is successful`;
  }



}
