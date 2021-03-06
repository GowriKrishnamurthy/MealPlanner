import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { DataStorageService } from '../../shared/data-storage.service';

import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as AuthActions from '../../auth/store/auth.actions';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;
  constructor(private dataStorageService: DataStorageService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<fromApp.AppState>) { }
  ngOnInit() {
    this.authState = this.store.select('auth');
  }
  onSave() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
  onFetch() {
    this.dataStorageService.getRecipes();
    this.router.navigate(['/recipes']);
  }
  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
    this.router.navigate(['']);
  }
}