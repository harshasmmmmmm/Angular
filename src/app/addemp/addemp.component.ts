import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiserveService } from '../apiserve.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addemp',
  imports: [FormsModule,CommonModule],
  templateUrl: './addemp.component.html',
  styleUrl: './addemp.component.css'
})
export class AddempComponent {
// employee = {
//     id: '',
//     name: '',
//     age: '',
//     salary: '',
//     desig: ''
//   };
//  constructor(private api: ApiserveService) {}
//  addEmp() {
//     this.api.addEmployee(this.employee).subscribe(
//       () => {
//         alert("Employee added successfully!");
//         console.log(this.employee);

//         // reset form
//         this.employee = {
//           id: '',
//           name: '',
//           age: '',
//           salary: '',
//           desig: ''
//         };
//       },
//       error => {
//         console.log("Error adding employee:", error);
//       }
//     );
//   }
}

