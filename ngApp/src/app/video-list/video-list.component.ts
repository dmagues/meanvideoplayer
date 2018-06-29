import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @Input() videos: Video[];
  @Output() SelectVideo = new EventEmitter<Video>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(vid: Video){
    this.SelectVideo.emit(vid);
  }

}
