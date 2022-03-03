import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteObjectDialogComponent } from './delete-object-dialog.component';

describe('DeleteObjectDialogComponent', () => {
  let component: DeleteObjectDialogComponent;
  let fixture: ComponentFixture<DeleteObjectDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteObjectDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteObjectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
