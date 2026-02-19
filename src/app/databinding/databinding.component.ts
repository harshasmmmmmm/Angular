import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface LoanOption {
  name: string;
  annualInterest: number;
}

@Component({
  selector: 'app-databinding',
  imports: [CommonModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  loanTypes: LoanOption[] = [
    { name: 'Gold', annualInterest: 8.5 },
    { name: 'Car', annualInterest: 9.75 },
    { name: 'Bike', annualInterest: 11.25 }
  ];

  selectedLoan = 'Gold';
  principal = 100000;
  tenureOptions: number[] = [6, 12, 24, 36, 48, 60];
  tenureMonths = 12;
  annualInterest = this.getSelectedLoanInterest();

  emi = 0;
  totalAmount = 0;
  totalInterest = 0;

  constructor() {
    this.calculateEmi();
  }

  onLoanTypeChange(): void {
    this.annualInterest = this.getSelectedLoanInterest();
    console.log('Loan type changed:', this.selectedLoan, 'Interest:', this.annualInterest);
    this.calculateEmi();
  }

  onLoanSelectionChange(event: Event): void {
    this.selectedLoan = (event.target as HTMLSelectElement).value;
    this.onLoanTypeChange();
  }

  onPrincipalChange(event: Event): void {
    const value = Number((event.target as HTMLInputElement).value);
    this.principal = Number.isFinite(value) ? value : 0;
    console.log('Principal changed:', this.principal);
    this.calculateEmi();
  }

  onTenureChange(event: Event): void {
    const value = Number((event.target as HTMLSelectElement).value);
    this.tenureMonths = Number.isFinite(value) ? value : 0;
    console.log('Tenure changed (months):', this.tenureMonths);
    this.calculateEmi();
  }

  calculateEmi(): void {
    const p = Number(this.principal);
    const n = Number(this.tenureMonths);
    const monthlyRate = Number(this.annualInterest) / 12 / 100;

    if (!p || !n || n <= 0 || monthlyRate < 0) {
      this.emi = 0;
      this.totalAmount = 0;
      this.totalInterest = 0;
      return;
    }

    if (monthlyRate === 0) {
      this.emi = p / n;
    } else {
      const growth = Math.pow(1 + monthlyRate, n);
      this.emi = (p * monthlyRate * growth) / (growth - 1);
    }

    this.totalAmount = this.emi * n;
    this.totalInterest = this.totalAmount - p;

    console.log('EMI calculated:', {
      principal: this.principal,
      tenureMonths: this.tenureMonths,
      annualInterest: this.annualInterest,
      emi: Number(this.emi.toFixed(2)),
      totalAmount: Number(this.totalAmount.toFixed(2)),
      totalInterest: Number(this.totalInterest.toFixed(2))
    });
  }

  private getSelectedLoanInterest(): number {
    return this.loanTypes.find((loan) => loan.name === this.selectedLoan)?.annualInterest ?? 0;
  }
}
