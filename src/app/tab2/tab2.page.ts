import { Component } from '@angular/core';
import { CartPage } from '../services/cart/cart.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    public cart : CartPage,
  ) {}

  ionViewWillEnter() {
    this.cart.unseen = 0;
    this.cart.getCartTotalQty();
    this.cart.totalPrice();
  }

  placeOrder() {
    
  }

}
