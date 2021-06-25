import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUserAloneComponent } from './show-user-alone.component';

describe('ShowUserAloneComponent', () => {
  let component: ShowUserAloneComponent;
  let fixture: ComponentFixture<ShowUserAloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUserAloneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUserAloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
