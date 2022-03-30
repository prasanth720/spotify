import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tiny',
  templateUrl: './tiny.component.html',
  styleUrls: ['./tiny.component.css']
})
export class TinyComponent implements OnInit {

  constructor(public route: Router ) { }

  ngOnInit(): void {
  }
add()
{
  this.route.navigateByUrl("myurl")
}
}
