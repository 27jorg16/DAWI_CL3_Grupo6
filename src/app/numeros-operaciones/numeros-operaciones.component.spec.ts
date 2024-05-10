import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerosOperacionesComponent } from './numeros-operaciones.component';

describe('NumerosOperacionesComponent', () => {
  let component: NumerosOperacionesComponent;
  let fixture: ComponentFixture<NumerosOperacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumerosOperacionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumerosOperacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
