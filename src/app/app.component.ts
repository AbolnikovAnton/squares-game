import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'squares-game';
  description = 'Squares-Game';
  squaresArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  ngOnInit(): void {
  }

}
