import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})

export class SquareComponent implements OnInit {
  color;

  randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    this.color = color;
  }

  constructor() {
  }

  ngOnInit(): void {
    this.randomColor();
  }

}
