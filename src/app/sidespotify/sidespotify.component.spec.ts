import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidespotifyComponent } from './sidespotify.component';

describe('SidespotifyComponent', () => {
  let component: SidespotifyComponent;
  let fixture: ComponentFixture<SidespotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidespotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidespotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
