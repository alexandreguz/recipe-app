import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepeDetailComponent } from './recepe-detail.component';

describe('RecepeDetailComponent', () => {
  let component: RecepeDetailComponent;
  let fixture: ComponentFixture<RecepeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
