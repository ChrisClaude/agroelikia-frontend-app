import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteShopDialogComponent } from './delete-shop-dialog.component';

describe('DeleleteShopDialogComponent', () => {
  let component: DeleteShopDialogComponent;
  let fixture: ComponentFixture<DeleteShopDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteShopDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteShopDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
