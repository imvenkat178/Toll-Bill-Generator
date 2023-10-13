import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsershowpriceComponent } from './usershowprice.component';

describe('UsershowpriceComponent', () => {
  let component: UsershowpriceComponent;
  let fixture: ComponentFixture<UsershowpriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsershowpriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsershowpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
