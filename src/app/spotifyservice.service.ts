import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyserviceService {
 
  constructor(private http:HttpClient) { }
  getalldata1()
  {
    return  this.http.get("http://localhost:3200/find-music");
  }
  createdata(data:any)
  {
    return this.http.post("http://localhost:3200/create",data)
  }
  deletedata(data:any)
  {
    return this.http.delete("http://localhost:3200/delete/",data)
  }
}
