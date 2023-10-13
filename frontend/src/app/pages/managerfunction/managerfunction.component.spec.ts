import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerfunctionComponent } from './managerfunction.component';

describe('ManagerfunctionComponent', () => {
  let component: ManagerfunctionComponent;
  let fixture: ComponentFixture<ManagerfunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerfunctionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerfunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
