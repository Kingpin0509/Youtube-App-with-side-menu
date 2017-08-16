import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YoutubeProvider } from '../../providers/youtube/youtube';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
/**
 * Generated class for the PlaylistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-playlist',
  templateUrl: 'playlist.html',
  providers:[YoutubeProvider]
})
export class PlaylistPage {
  datas:any;
  nextPageToken:any;
  constructor(
    public navCtrl: NavController,
    private params: NavParams,
    private yt: YoutubeProvider,
    private youtube: YoutubeVideoPlayer
  ) {
    yt.playlistList(params.data.id).then(data => {
      this.datas = data.items;
      if(data.nextPageToken){
        this.nextPageToken = data.nextPageToken;
      }
    })
  }

  play(ids){
    this.youtube.openVideo(ids);
    //console.log('sssssssssssss');
  }

  infiniteScrool(ev){
    if(this.nextPageToken){
      this.yt.playlistList_page(this.params.data.id, this.nextPageToken).then(data=>{
        for(let i of data.items){
          this.datas.push(i);
        }
        if(!data.nextPageToken){
          this.nextPageToken = null;
        }else{
          this.nextPageToken = data.nextPageToken;
        }
        ev.complete();
      });
    }else{
      ev.complete();
    }
  }

}