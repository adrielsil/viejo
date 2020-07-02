import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoventasComponent } from './graficoventas.component';

describe('GraficoventasComponent', () => {
  let component: GraficoventasComponent;
  let fixture: ComponentFixture<GraficoventasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoventasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoventasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
