import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  Total:number
  BMR:number
 

  constructor(public navCtrl: NavController) {

 
  }
  calTDEE1() {
    // alert("test: " + this.weight + " " + this.height)
    this.BMR = 1.2*(this.BMR)
     alert(this.BMR)
   }
   calTDEE2() {
    // alert("test: " + this.weight + " " + this.height)
    this.BMR = 1.375*(this.BMR)
    alert(this.BMR)
   }
   calTDEE3() {
    // alert("test: " + this.weight + " " + this.height)
    this.BMR = 1.55*(this.BMR)
    alert(this.BMR)
   }
   calTDEE4() {
    // alert("test: " + this.weight + " " + this.height)
    this.BMR = 1.7*(this.BMR)
    alert(this.BMR)
   }
   calTDEE5() {
    // alert("test: " + this.weight + " " + this.height)
    this.BMR = 1.9*(this.BMR)
    alert(this.BMR)
   }


}
