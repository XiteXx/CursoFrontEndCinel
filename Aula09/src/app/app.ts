import { Component, OnInit, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { Footer } from "./components/footer/footer";
import { AuthStateService } from './service/auth-state';

@Component({
  selector: 'app-root',
  imports: [ Header, Main, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  
  constructor(private authStateService: AuthStateService) {

  }
  ngOnInit(): void {
    this.authStateService.initAuthListener();

    this.authStateService.getUser().subscribe((user) => {
      console.log("Dados do google Auth:  ", user);
    });
  }
}
