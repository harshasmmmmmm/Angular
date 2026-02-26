import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailId = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
    if (!this.emailId || !this.password) {
      this.error = "Please fill all fields";
      return;
    }

    this.auth.login(this.emailId, this.password).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']); // redirect after successful login
      },
      error: (err) => {
        this.error = err.error?.message || "Invalid email or password";
      }
    });
  }
}