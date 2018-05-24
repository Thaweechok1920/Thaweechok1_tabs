import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  weight: number
  height: number 
  m: number
  f: number
  age: number
  bmr : number

  constructor(public navCtrl: NavController) {
  }


  calBmr1() {
  // alert("test: " + this.weight + " " + this.height)
  this.m = 66+(13.7*this.weight + (5*this.height) - (6.8*this.age ))
  alert(this.m)
 }
  calBmr2() {
  // alert("test: " + this.weight + " " + this.height)
  (this.f = 665+(9.6*this.weight + (1.8*this.height) - (4.7*this.age )))
  alert(this.f)
  // alert(this.bmi)
 }
  
   
   
}




  

