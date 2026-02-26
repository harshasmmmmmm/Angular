import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactivedriven',
  standalone: true,        
  imports: [ReactiveFormsModule],
  templateUrl: './reactivedriven.component.html',
  styleUrls: ['./reactivedriven.component.css']
})
export class ReactivedrivenComponent implements OnInit {

  student!: FormGroup;

  myinfo(studentdata: any) {
    console.log(studentdata);
  }

  ngOnInit(): void {
    this.student = new FormGroup({
      firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ]),

      lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ]),

      age: new FormControl('', [
        Validators.required,
        Validators.min(18),
        Validators.max(60),
      ])
    });
  }
}
