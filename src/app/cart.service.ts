import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];

  // addToCart

  addToCart(product){
    this.items.push(product);
  }

  // get Items 

  getItems(){
    return this.items;
  }

  // ClearCart

  clearCart(){
    this.items= [];
    return this.items;
  }

  constructor() {}

}