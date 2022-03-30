import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyspotifyComponent } from './bodyspotify.component';

describe('BodyspotifyComponent', () => {
  let component: BodyspotifyComponent;
  let fixture: ComponentFixture<BodyspotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyspotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyspotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
