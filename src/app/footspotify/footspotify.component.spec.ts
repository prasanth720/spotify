import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootspotifyComponent } from './footspotify.component';

describe('FootspotifyComponent', () => {
  let component: FootspotifyComponent;
  let fixture: ComponentFixture<FootspotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootspotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootspotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
