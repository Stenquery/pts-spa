import { Component, NO_ERRORS_SCHEMA, inject } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { CommonModule, NgFor } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [CommonModule,NgFor],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css',
  schemas:[NO_ERRORS_SCHEMA]
})
export class CartSummaryComponent {
  cartItems:CartItem[];
  cartService:CartService=inject(CartService);
  toastrService:ToastrService=inject(ToastrService);
  constructor(){
    this.cartItems=this.cartService.getCartItems();
  }
  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem);
    this.toastrService.error(cartItem.work.title+" listeden kaldırıldı!","Silindi");
  }
}
