import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../score.service';

@Component({
  selector: 'app-fin-test',
  templateUrl: './fin-test.component.html',
  styleUrls: ['./fin-test.component.css']
})
export class FinTestComponent implements OnInit {

  score: number;

  constructor(private scoreService : ScoreService) { }

  ngOnInit() {
    
    this.score = ((100/5)*parseInt(localStorage.getItem("score")))*120;

  }

}
