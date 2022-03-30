import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyserviceService } from '../spotifyservice.service';

@Component({
  selector: 'app-bodyspotify',
  templateUrl: './bodyspotify.component.html',
  styleUrls: ['./bodyspotify.component.css']
})
export class BodyspotifyComponent implements OnInit {
  public artists :any;
  data:any;
  data1: any;
  spotifygetdata: any;
  constructor(private route:Router,private jservice:SpotifyserviceService) { }

  ngOnInit(): void {
    // this.data1=this.jservice.getalldata()
    // console.log("jsondata",this.data1)
    this.getdata()
  }
  // tracks(data:any)
  // {
  //   console.log("inside track method")
  //   localStorage.setItem("user",JSON.stringify(data));
  //   this.route.navigateByUrl('/tracks/'+data.id)
  //   console.log(data.id);

  // }

  public getdata()
  {
    this.jservice.getalldata1().subscribe(res=>{
       this.spotifygetdata=res
       console.log("spotify get data",this.spotifygetdata);
       

    })
  }
tracks(data:any)
{
  console.log("tracks data",data._id);
  this.route.navigateByUrl('/tracks/'+data._id)
}
}
