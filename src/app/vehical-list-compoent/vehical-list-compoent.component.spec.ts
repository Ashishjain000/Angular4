import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicalListCompoentComponent } from './vehical-list-compoent.component';

describe('VehicalListCompoentComponent', () => {
  let component: VehicalListCompoentComponent;
  let fixture: ComponentFixture<VehicalListCompoentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicalListCompoentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicalListCompoentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
