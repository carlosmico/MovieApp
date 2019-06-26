import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasOnlineComponent } from './peliculas-online.component';

describe('PeliculasOnlineComponent', () => {
  let component: PeliculasOnlineComponent;
  let fixture: ComponentFixture<PeliculasOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculasOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
