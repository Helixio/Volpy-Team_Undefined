import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Http, Request } from '@angular/http';
import { ScoreService } from '../score.service';

@Component({
  selector: 'app-info-device',
  templateUrl: './info-device.component.html',
  styleUrls: ['./info-device.component.css']
})
export class InfoDeviceComponent implements OnInit {
  public deviceInfo = null; 
  
  constructor(private deviceService: DeviceDetectorService, public http:Http, private scoreService: ScoreService) {
    this.detectDevice();
   }

  public detectDevice() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
  }

  ngOnInit() {
  }

  passTest(){
    this.scoreService.score++;
    let tmp = parseInt(localStorage.getItem("score"))+1;
    localStorage.setItem("score", tmp.toString());
  }
}
