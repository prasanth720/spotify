import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name="prasanth";

  msg1 : string
  click1(event)
  {
    console.log(event)
    this.msg1=event
  }

}
