import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SquareComponent} from './square/square.component';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';

export const firebaseConfig = {
  apiKey: 'AIzaSyBlJGgjStU6JjWxmoa2VdRbpPktGeqXkzs',
  authDomain: 'squares-game-75ccc.firebaseapp.com',
  databaseURL: 'https://squares-game-75ccc-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'squares-game-75ccc',
  storageBucket: 'squares-game-75ccc.appspot.com',
  messagingSenderId: '288538922241',
  appId: '1:288538922241:web:a18d51a5dcb82ba8ffdf00',
  measurementId: 'G-YMTDR84XDB'
};

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {
}
