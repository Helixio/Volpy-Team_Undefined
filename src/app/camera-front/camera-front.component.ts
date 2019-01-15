import { Component, OnInit } from '@angular/core';
import { WebCamComponent } from 'ack-angular-webcam';
import $ from 'jquery';
import faceDetection from 'jquery-facedetection';
import { ScoreService } from '../score.service';

faceDetection($)

@Component({
  selector: 'app-camera-front',
  templateUrl: './camera-front.component.html',
  styleUrls: ['./camera-front.component.css']
})
export class CameraFrontComponent implements OnInit {

  webcam:WebCamComponent;

  options = {
    audio: false,
    video: true,
    width: 280,
    height: 210
  };

  base64 : string;
  constructor(private scoreService: ScoreService) { }

  ngOnInit() {
  }

  passTest(){
    this.scoreService.score++;
    let tmp = parseInt(localStorage.getItem("score"))+1;
    localStorage.setItem("score", tmp.toString());
  }
  
  genBase64(){
    this.webcam.getBase64()
    .then( 
      base=>{
        this.base64=base;
        $(document).ready(()=>{
        $('#picture').faceDetection({
            complete:  (faces)=> {
              if(faces.length!=0){
                alert('La caméra avant fonctionne !');
                window.location.replace("/cameraBack");
                this.passTest()
              }else{
                alert("Le visage n'est pas reconnu !");
                window.location.replace("/cameraFront");
                this.base64 = null;
              }
            },
            error:function (code, message) {
              alert('Error: ' + message);
            }
        });
        });
      }
    )
    .catch( e=>console.error(e) )
  }
  }
