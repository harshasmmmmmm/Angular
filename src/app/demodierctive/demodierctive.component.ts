import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demodierctive',
  imports: [CommonModule],
  templateUrl: './demodierctive.component.html',
  styleUrl: './demodierctive.component.css'
})
export class DemodierctiveComponent {
  abc=true;
  emp=["abhi","harsha","nanu"];
  fruit=["Banana","watermelon","apple"];
  addfruit(fru:any){
    this.fruit.push(fru);
    
  }

 num: number = 0;             // stores input number
  selected: number | null = null;   // number selected to switch-case

}
