import { Component, ElementRef, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent implements OnInit {
  isAuthenticated = false;
  background!: string;

  constructor(private authService: AuthService, private router: Router, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.authService.isUserLoggedIn$.subscribe((isLoggedIn) => {
      this.isAuthenticated = isLoggedIn;
    });
  }

  changeBG(color: string) {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundColor = color;
}

  logout(): void {
    localStorage.removeItem("token");
    this.authService.isUserLoggedIn$.next(false);
    this.router.navigate(["login"]);
  }
}

// export class AppComponent implements AfterViewInit {
//   constructor() {}
  
// }
