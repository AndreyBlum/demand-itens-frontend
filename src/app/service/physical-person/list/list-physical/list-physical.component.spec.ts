import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPhysicalComponent } from './list-physical.component';

describe('ListPhysicalComponent', () => {
  let component: ListPhysicalComponent;
  let fixture: ComponentFixture<ListPhysicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPhysicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPhysicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
