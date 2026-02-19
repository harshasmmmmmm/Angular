import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemodierctiveComponent } from './demodierctive.component';

describe('DemodierctiveComponent', () => {
  let component: DemodierctiveComponent;
  let fixture: ComponentFixture<DemodierctiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemodierctiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemodierctiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
