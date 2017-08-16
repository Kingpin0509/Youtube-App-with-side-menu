import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the YoutubeProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class YoutubeProvider {

  key = 'AIzaSyBaFC8ffmN6aLrfHkq9PS6t5Tt-gW_1GWc';
  constructor(private http: Http) {}

  playlist(channel){
    return this.http.get("https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId="+channel+"&key="+this.key)
    .toPromise()
    .then(data => data.json());
  }

  playlist_page(channel, pageToken){
    return this.http.get("https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId="+channel+"&pageToken="+pageToken+"&key="+this.key)
    .toPromise()
    .then(data => data.json());
  }

  playlistList(playlistId){
    return this.http.get("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId="+playlistId+"&key="+this.key)
    .toPromise()
    .then(data => data.json());
  }

  playlistList_page(playlistId, pageToken){
    return this.http.get("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&pageToken="+pageToken+"&playlistId="+playlistId+"&key="+this.key)
    .toPromise()
    .then(data => data.json());
  }

}