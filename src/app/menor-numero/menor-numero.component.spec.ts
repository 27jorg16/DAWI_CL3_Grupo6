import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenorNumeroComponent } from './menor-numero.component';

describe('MenorNumeroComponent', () => {
  let component: MenorNumeroComponent;
  let fixture: ComponentFixture<MenorNumeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenorNumeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenorNumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
