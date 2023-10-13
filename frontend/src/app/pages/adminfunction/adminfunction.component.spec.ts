import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfunctionComponent } from './adminfunction.component';

describe('AdminfunctionComponent', () => {
  let component: AdminfunctionComponent;
  let fixture: ComponentFixture<AdminfunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminfunctionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminfunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
