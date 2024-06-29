import { Component, Inject, inject } from '@angular/core';
import { CartSummaryComponent } from '../cart-summary/cart-summary.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CartSummaryComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
}
