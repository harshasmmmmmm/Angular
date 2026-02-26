import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SqrPipe } from '../sqr.pipe';
import { CubePipe } from '../cube.pipe';
import { FactorialPipe } from '../factorial.pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule,SqrPipe,CubePipe,FactorialPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
name="Sandesh is GoodBoy(Play Boy)";
salary=100000;
dob=new Date();
obj={name:"SANDESH",age:"22",city:"kodagu"};
}
