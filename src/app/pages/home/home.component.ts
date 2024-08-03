import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
  standalone: true,
  imports:[CommonModule]
})
export class HomeCompnent implements OnInit {
  loggedIn: boolean = false;

  username!: string;

  // Logic to determine if user is logged in
  checkAuth() {
    debugger;
    // Example logic; replace with actual implementation
    const token = sessionStorage.getItem('AccessToken');
    if (token) {
      this.loggedIn = true;
      const username = sessionStorage.getItem('username');
      if (username) {
        this.username = username;
      }
    } else {
      this.loggedIn = false;
    }
  }

  ngOnInit(): void {
    this.checkAuth();
  }
}