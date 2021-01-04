import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Square} from './square';
import {AngularFirestore} from '@angular/fire/firestore';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'squares-game';
  description = 'Squares-Game';
  squaresArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  squares$: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {
    this.squares$ = firestore.collection('squares-colors').valueChanges();
  }

  randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // TODO detect if squares exists
  async ngOnInit(): Promise<void> {
    for (const sq of this.squaresArr) {
      const sqRef = this.firestore.collection('squares-colors').doc(sq.toString());
      const sqDoc = await sqRef.get();
      sqDoc.toPromise().then(x => {
        if (!x.exists) {
          this.firestore.collection('squares-colors').doc(sq.toString()).set({
            index: sq,
            color: this.randomColor()
          });
        }
      });
    }
  }

  setRandomColor(square: any): void {
    console.log(square);
    this.firestore.collection('squares-colors').doc(square['index'].toString()).set({
      index: square['index'],
      color: this.randomColor()
    });
  }
}
