import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(){}
  ngOnInit()  {
    firebase.initializeApp({
      apiKey: "AIzaSyAUzIW-H8etDT91heWkLZpRNXXMXqlpiJs",
      authDomain: "ng-meal-planner.firebaseapp.com"
    });
  }
  featureLoaded='recipe';
  onNavigate(event)
  {
    this.featureLoaded=event;
  }
}
