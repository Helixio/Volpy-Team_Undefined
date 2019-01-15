import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../score.service';

@Component({
  selector: 'app-audio-test',
  templateUrl: './audio-test.component.html',
  styleUrls: ['./audio-test.component.css']
})
export class AudioTestComponent implements OnInit {

  constructor(private scoreService: ScoreService) { }

  passTest(){
    this.scoreService.score++;
    let tmp = parseInt(localStorage.getItem("score"))+1;
    localStorage.setItem("score", tmp.toString());
  }

  ngOnInit() {
  }

}
