import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MregformComponent } from './mregform.component';

describe('MregformComponent', () => {
  let component: MregformComponent;
  let fixture: ComponentFixture<MregformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MregformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MregformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
