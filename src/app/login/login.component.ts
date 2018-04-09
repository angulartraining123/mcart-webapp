import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userName: string;
  public password: string;
  public submitted: boolean;
  public isAuthenticated: boolean;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if (this.userName === "admin" && this.password === "admin")
      this.isAuthenticated = true;
    else
      this.isAuthenticated = false;
  }


}
