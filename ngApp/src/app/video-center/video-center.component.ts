import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {
  
  videos: Array<Video>;
  selectedVideo: Video;
  hideNewVideo: boolean=true;

  constructor(private _videoService: VideoService) { }

  ngOnInit() {
    this._videoService.getVideos()
        .subscribe(resData => this.videos = resData)
  }

  onSelectVideo(video:any){
    this.selectedVideo = video;
    this.hideNewVideo = true;
  }

  onSubmitAddVideo(video: Video){
    this._videoService.addVideo(video)
      .subscribe(resNewVideo =>{
          this.videos.push(resNewVideo);
          this.selectedVideo = resNewVideo;
          this.hideNewVideo = true;
        });
  }

  onUpdateVideo(video:any){
    this._videoService.updateVideo(video)
        .subscribe(resUpdatedVideo=> video=resUpdatedVideo);
    this.selectedVideo = null;    
  }

  newVideo(){
    this.hideNewVideo = false; 
  }

}
