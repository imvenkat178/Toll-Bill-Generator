import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UregformComponent } from './uregform.component';

describe('UregformComponent', () => {
  let component: UregformComponent;
  let fixture: ComponentFixture<UregformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UregformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UregformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
