import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloMod2Component } from './hello-mod2.component';

describe('HelloMod2Component', () => {
  let component: HelloMod2Component;
  let fixture: ComponentFixture<HelloMod2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelloMod2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloMod2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
