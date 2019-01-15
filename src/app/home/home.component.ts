import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../score.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private scoreService: ScoreService) { }

  ngOnInit() {
    this.scoreService.score = 0;
    localStorage.setItem("score", "0");
  }

}
