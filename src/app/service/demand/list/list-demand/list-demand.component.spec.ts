import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDemandComponent } from './list-demand.component';

describe('ListDemandComponent', () => {
  let component: ListDemandComponent;
  let fixture: ComponentFixture<ListDemandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDemandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
