import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JubilacionComponent } from './jubilacion.component';

describe('JubilacionComponent', () => {
  let component: JubilacionComponent;
  let fixture: ComponentFixture<JubilacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JubilacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JubilacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
