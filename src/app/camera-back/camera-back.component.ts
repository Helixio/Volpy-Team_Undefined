import { Component, OnInit } from '@angular/core';
import { WebCamComponent } from 'ack-angular-webcam';
import $ from 'jquery';
import faceDetection from 'jquery-facedetection';
import { Router } from "@angular/router"
import { ScoreService } from '../score.service';

faceDetection($)

@Component({
  selector: 'app-camera-back',
  templateUrl: './camera-back.component.html',
  styleUrls: ['./camera-back.component.css']
})
export class CameraBackComponent implements OnInit {

  webcam:WebCamComponent;

  options = {
    audio: false,
    video: true,
    width: 280,
    height: 210
  };

  base64Env : string;
  constructor(private router : Router, private scoreService: ScoreService) { }

  ngOnInit() {
    
  }

  passTest(){
    this.scoreService.score++;
    let tmp = parseInt(localStorage.getItem("score"))+1;
    localStorage.setItem("score", tmp.toString());
  }

  genBase64Env(){
    this.webcam.getBase64()
    .then( 
      base=>{
        this.base64Env=base;
        $(document).ready(()=>{
          $('#pictureEnv').faceDetection({
            complete: (faces)=> {
              if(faces.length!=0){
                alert('La caméra arrière fonctionne !');
                window.location.replace("/audio");
                this.passTest();
              }else{
                alert("Le visage n'est pas reconnu !");
                this.base64Env = null;
                window.location.replace("/cameraBack");
              }
            },
            error:function (code, message) {
              alert('Error: ' + message);
            }
          });
        });
      }
    )
    .catch(e=>console.error(e))
  }
}
