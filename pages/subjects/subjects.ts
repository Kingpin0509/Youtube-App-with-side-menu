import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YoutubeProvider } from '../../providers/youtube/youtube';
import { PlaylistPage } from '../playlist/playlist';
/**
 * Generated class for the SubjectsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subjects',
  templateUrl: 'subjects.html',
  //styleUrls: ['./subjects.scss'],
  providers: [YoutubeProvider]
})
export class SubjectsPage {

  channel = 'UCtquNwJn1UMTWN8kV0U-3Aw';
  datas:any;
  nextPageToken:any;
  constructor(public navCtrl: NavController, private yt: YoutubeProvider) {
    yt.playlist(this.channel).then(data => {
      this.datas = data.items;
      if(data.nextPageToken){
        this.nextPageToken = data.nextPageToken;
      }
    });
  }

  openPlaylist(id){
    this.navCtrl.push(PlaylistPage, {id:id});
  }

  infiniteScroll(ev){
    if(this.nextPageToken){
      this.yt.playlist_page(this.channel,this.nextPageToken).then(data=>{
        for(let i of data.items){
          this.datas.push(i);
        }
        ev.complete();
        if(!data.nextPageToken){
          this.nextPageToken = null;
        }else{
          this.nextPageToken = data.nextPageToken;
        }
      })
    }else{
      ev.complete();
    }
  }

}