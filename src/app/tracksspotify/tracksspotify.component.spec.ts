import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TracksspotifyComponent } from './tracksspotify.component';

describe('TracksspotifyComponent', () => {
  let component: TracksspotifyComponent;
  let fixture: ComponentFixture<TracksspotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TracksspotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TracksspotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
