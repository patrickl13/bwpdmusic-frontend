import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusictableComponent } from './musictable.component';

describe('MusictableComponent', () => {
  let component: MusictableComponent;
  let fixture: ComponentFixture<MusictableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusictableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusictableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
