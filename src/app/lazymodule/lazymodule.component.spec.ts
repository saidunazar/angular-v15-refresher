import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazymoduleComponent } from './lazymodule.component';

describe('LazymoduleComponent', () => {
  let component: LazymoduleComponent;
  let fixture: ComponentFixture<LazymoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazymoduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazymoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
