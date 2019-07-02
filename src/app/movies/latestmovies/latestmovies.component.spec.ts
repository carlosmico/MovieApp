import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestmoviesComponent } from './latestmovies.component';

describe('LatestmoviesComponent', () => {
  let component: LatestmoviesComponent;
  let fixture: ComponentFixture<LatestmoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestmoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
