import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RepeatDirective } from './repeat.directive';
import { MessageDirective } from './message.directive';
import { ProductListComponent } from './product-list/product-list.component';
import { SortPipe } from './sort.pipe';
import { CartComponent } from './cart/cart.component';
import { CoursesListComponent } from './courses-list/courses-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    WelcomeComponent,
    LoginComponent,
    RepeatDirective,
    MessageDirective,
    ProductListComponent,
    SortPipe,
    CartComponent,
    CoursesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [WelcomeComponent]
})
export class AppModule { }
