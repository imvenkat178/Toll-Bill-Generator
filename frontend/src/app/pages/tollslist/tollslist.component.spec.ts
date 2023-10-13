import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TollslistComponent } from './tollslist.component';

describe('TollslistComponent', () => {
  let component: TollslistComponent;
  let fixture: ComponentFixture<TollslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TollslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TollslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
