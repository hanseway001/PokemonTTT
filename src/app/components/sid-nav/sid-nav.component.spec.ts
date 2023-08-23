import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidNavComponent } from './sid-nav.component';

describe('SidNavComponent', () => {
  let component: SidNavComponent;
  let fixture: ComponentFixture<SidNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidNavComponent]
    });
    fixture = TestBed.createComponent(SidNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
