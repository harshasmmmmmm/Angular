import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templatedriven',
  imports: [FormsModule,CommonModule],
  templateUrl: './templatedriven.component.html',
  styleUrl: './templatedriven.component.css'
})
export class TemplatedrivenComponent {
  userdata(userform:any){
console.log(userform);
  }

}
