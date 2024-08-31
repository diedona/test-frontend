import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloMod1Component } from './hello-mod1.component';

describe('HelloMod1Component', () => {
  let component: HelloMod1Component;
  let fixture: ComponentFixture<HelloMod1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelloMod1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloMod1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
