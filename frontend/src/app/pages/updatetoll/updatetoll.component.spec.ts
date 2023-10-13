import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetollComponent } from './updatetoll.component';

describe('UpdatetollComponent', () => {
  let component: UpdatetollComponent;
  let fixture: ComponentFixture<UpdatetollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatetollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatetollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
