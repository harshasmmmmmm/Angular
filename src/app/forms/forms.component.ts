import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactivedrivenComponent } from '../reactivedriven/reactivedriven.component';
import { TemplatedrivenComponent } from '../templatedriven/templatedriven.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-forms',
  imports: [CommonModule,ReactivedrivenComponent,TemplatedrivenComponent],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

}
