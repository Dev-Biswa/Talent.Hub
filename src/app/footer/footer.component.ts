import { Component, OnInit } from '@angular/core';
import { Footer } from '../models/footer.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }
  footerItems: Footer[] = [];

  ngOnInit() {
    this.initialization();
  }
  
  private initialization(){
    this.footerItems = [
      {RouterLink: "#", Label: "About Us"},
      {RouterLink: "#", Label: "How it Works"},
      {RouterLink: "#", Label: "Terms & Conditions"},
      {RouterLink: "#", Label: "Career"},
      {RouterLink: "#", Label: "Browse Talents"},    
      {RouterLink: "/aboutus", Label: "SiteMap"},
      {RouterLink: "/login", Label: "Login"},
      {RouterLink: "/registration", Label: "Register"},
    ]
  }
}
