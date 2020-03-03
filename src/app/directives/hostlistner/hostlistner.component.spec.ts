import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostlistnerComponent } from './hostlistner.component';

describe('HostlistnerComponent', () => {
  let component: HostlistnerComponent;
  let fixture: ComponentFixture<HostlistnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostlistnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostlistnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
