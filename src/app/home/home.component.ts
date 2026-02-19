import { Component } from '@angular/core';

interface HomeSlide {
  title: string;
  description: string;
  ctaLabel: string;
  ctaLink: string;
}

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  slides: HomeSlide[] = [
    {
      title: 'Plan Your Week Clearly',
      description: 'Break down goals into realistic daily tasks and keep your schedule focused.',
      ctaLabel: 'Start Planning',
      ctaLink: '/signup'
    },
    {
      title: 'Track Progress Visually',
      description: 'See streaks, completion trends, and progress snapshots at a glance.',
      ctaLabel: 'View Dashboard',
      ctaLink: '/dashboard'
    },
    {
      title: 'Stay Consistent Daily',
      description: 'Get reminded at the right time so your habit loop stays strong and simple.',
      ctaLabel: 'Create Account',
      ctaLink: '/signup'
    }
  ];

  activeSlide = 0;

  prevSlide(): void {
    this.activeSlide = (this.activeSlide - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide(): void {
    this.activeSlide = (this.activeSlide + 1) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.activeSlide = index;
  }
}
