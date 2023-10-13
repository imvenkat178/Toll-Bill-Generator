import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfunctionComponent } from './userfunction.component';

describe('UserfunctionComponent', () => {
  let component: UserfunctionComponent;
  let fixture: ComponentFixture<UserfunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserfunctionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserfunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
