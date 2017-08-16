import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NotesPage } from '../pages/notes/notes';
import { SubjectsPage } from '../pages/subjects/subjects';
import { PlaylistPage } from '../pages/playlist/playlist';
import { YoutubeProvider } from '../providers/youtube/youtube';
import { Safe } from '../pipes/safe/safe';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NotesPage,
    PlaylistPage,
    SubjectsPage,
    Safe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NotesPage,
    PlaylistPage,
    SubjectsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    YoutubeProvider,
    YoutubeVideoPlayer
  ]
})
export class AppModule {}
