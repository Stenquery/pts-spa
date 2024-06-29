import { Injectable } from '@angular/core';
import { CartItems } from '../models/cartItems';
import { Work } from '../models/work';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(work:Work){
    let value=CartItems.find((x)=>x.work.workId===work.workId);
    if(value==null){
      let cartItem=new CartItem();
      cartItem.work=work;
      cartItem.quantity=1;
      CartItems.push(cartItem);
    }
    else{
      value.quantity+=1;
    }
  }
  getCartItems():CartItem[]{
    return CartItems;
  }
  removeFromCart(cartItem:CartItem){
    // let value=CartItems.find((x)=>x.work.workId===cartItem.work.workId);
    // if(value!=null){
      CartItems.splice(CartItems.indexOf(cartItem),1);
    // }
  }
}
