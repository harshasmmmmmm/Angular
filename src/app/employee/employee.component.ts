// import { CommonModule } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { ApiserveService } from '../apiserve.service';

// @Component({
//   selector: 'app-employee',
//   imports: [FormsModule,CommonModule],
//   templateUrl: './employee.component.html',
//   styleUrl: './employee.component.css'
// })
// export class EmployeeComponent implements OnInit {

//   employees: any = [];

//   employee = {
//     id: '',
//     name: '',
//     age: '',
//     salary: '',
//     desig: ''
//   };

//   editMode = false;

//   constructor(private api: ApiserveService) {}

//   ngOnInit() {
//     this.loadEmployees();
//   }

//   loadEmployees() {
//     this.api.getdata().subscribe(res => this.employees = res);
//   }

//   saveEmployee() {
//     if (this.editMode) {
//      this.api.updateEmployee(Number(this.employee.id), this.employee)
//         .subscribe(() => {
//           alert("Updated ✅");
//           this.resetForm();
//           this.loadEmployees();
//         });
//     } else {
//       this.api.addEmployee(this.employee)
//         .subscribe(() => {
//           alert("Added ✅");
//           this.resetForm();
//           this.loadEmployees();
//         });
//     }
//   }

//   edit(emp: any) {
//     this.employee = { ...emp };
//     this.editMode = true;
//   }

//   delete(id: any) {
//     this.api.deleteEmployee(id)
//       .subscribe(() => {
//         alert("Deleted ✅");
//         this.loadEmployees();
//       });
//   }

//   resetForm() {
//     this.employee = { id:'', name:'', age:'', salary:'', desig:'' };
//     this.editMode = false;
//   }
// }