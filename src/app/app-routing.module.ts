import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyspotifyComponent } from './bodyspotify/bodyspotify.component';
import { TracksspotifyComponent } from './tracksspotify/tracksspotify.component';


const routes: Routes = [
{path:"home",component:BodyspotifyComponent},
{path:'tracks/:id',component:TracksspotifyComponent},
{path: '', redirectTo:'/home',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
