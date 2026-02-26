import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [FormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  customerName = '';
  emailId = '';
  mobileNo = '';
  address = '';
  password = '';
  confirmPassword = '';
  message = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  onRegister() {
    if (this.password !== this.confirmPassword) {
      this.error = "Passwords do not match";
      return;
    }

    const payload = {
      customerName: this.customerName,
      emailId: this.emailId,
      mobileNo: this.mobileNo,
      address: this.address,
      password: this.password
    };

    this.auth.register(payload).subscribe({
      next: (res: any) => {
        this.message = res.message || "Registration successful!";
        this.router.navigate(['/login']); // redirect to login
      },
      error: (err) => {
        this.error = err.error?.message || "Registration failed!";
      }
    });
  }
}