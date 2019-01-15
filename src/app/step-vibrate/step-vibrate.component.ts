import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../score.service';

@Component({
  selector: 'app-step-vibrate',
  templateUrl: './step-vibrate.component.html',
  styleUrls: ['./step-vibrate.component.css']
})
export class StepVibrateComponent implements OnInit {
  boolVibe = false;
  constructor(private scoreService: ScoreService) { }

  launchVibe(){
    navigator.vibrate([500]);
    setTimeout(()=>{
      this.boolVibe=true;
    },500)
  }
  ngOnInit() {

  }

  passTest(){
    this.scoreService.score++;
    let tmp = parseInt(localStorage.getItem("score"))+1;
    localStorage.setItem("score", tmp.toString());
  }

}
