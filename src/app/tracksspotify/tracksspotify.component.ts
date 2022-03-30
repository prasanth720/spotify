import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyserviceService } from '../spotifyservice.service';

@Component({
  selector: 'app-tracksspotify',
  templateUrl: './tracksspotify.component.html',
  styleUrls: ['./tracksspotify.component.css']
})
export class TracksspotifyComponent implements OnInit {
  data1: any;

  index =this.aroute.snapshot.params.id;
  i:number
  res: any;
  track:any
  spotifygetdata:any
  constructor(private jservice:SpotifyserviceService,public aroute:ActivatedRoute) { }

  ngOnInit(): void {
  //   console.log("Inisde tracks conponent")
  //  this.res=JSON.parse(localStorage.getItem("user"))
  //  console.log("res",this.res)
  //   this.data1=this.jservice.getalldata()
  //   console.log(this.data1)
    this.getdata()
    console.log("index",this.index)
  }
public getdata()
{
 this.jservice.getalldata1().subscribe((res:any)=>{
      this.spotifygetdata=res
        console.log("trackscomponent ",this.spotifygetdata)
       this.i=this.spotifygetdata.findIndex((user: { _id: any; })=>user._id==this.index)
       console.log("position",this.i)
      this.track=this.spotifygetdata[this.i].Tracks
      // this.track=this.track.Tracks
      console.log(this.track)
 })
}
}
