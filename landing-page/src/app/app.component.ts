import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Pokenmon Generator';
  
  constructor(private router: Router, private titleService:Title) {}
  
  ngOnInit(): void {
    this.titleService.setTitle("Pokemon Generator")
    this.router.navigate(['/login'])
  }
}
