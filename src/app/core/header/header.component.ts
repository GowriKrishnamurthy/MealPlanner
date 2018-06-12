import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { DataStorageService } from '../../shared/data-storage.service';
import { RecipeService } from '../../recipes/recipe.service';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private dataStorageService: DataStorageService,
    private recipeService: RecipeService,
    private authService:AuthService) { }
  ngOnInit() {

  }
  onSave() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => console.log(response),
        (error) => console.log(error)
      );
  }
  onFetch() {
    this.dataStorageService.getRecipes();
  }
  onLogout(){
    this.authService.logout();
  }
  
  isAuth() {
    return this.authService.isAuthenticated();
  }
}
