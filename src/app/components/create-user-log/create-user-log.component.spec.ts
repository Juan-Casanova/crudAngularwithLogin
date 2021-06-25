import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserLogComponent } from './create-user-log.component';

describe('CreateUserLogComponent', () => {
  let component: CreateUserLogComponent;
  let fixture: ComponentFixture<CreateUserLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
