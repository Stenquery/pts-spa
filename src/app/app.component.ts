import { Component, NO_ERRORS_SCHEMA, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorkComponent } from './components/work/work.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CategoryComponent } from './components/category/category.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
// import { authInterceptor } from './interceptors/auth.interceptor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,WorkComponent,NavbarComponent,LoginComponent,
    SidebarComponent,CategoryComponent,HttpClientModule,CartSummaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas:[NO_ERRORS_SCHEMA],
  // providers:[{
  //   provide:HTTP_INTERCEPTORS<any>,
  // }]
})
export class AppComponent {
  title = 'pts-spa';
  authService=inject(AuthService);
  constructor(){

  }
}
