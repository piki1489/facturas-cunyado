import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasBComponent } from './ventas-b.component';

describe('VentasBComponent', () => {
  let component: VentasBComponent;
  let fixture: ComponentFixture<VentasBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentasBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
