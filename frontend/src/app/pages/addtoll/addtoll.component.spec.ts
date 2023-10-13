import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtollComponent } from './addtoll.component';

describe('AddtollComponent', () => {
  let component: AddtollComponent;
  let fixture: ComponentFixture<AddtollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
