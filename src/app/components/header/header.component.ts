import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  constructor() {}
  
  ngOnInit() {
    this.navbarIsNotVisible = true;
  }


  navbarIsNotVisible: boolean = false;

  showNavbar() {
    this.navbarIsNotVisible = !this.navbarIsNotVisible;
    console.log("adesso navbarIsNotVisible è", this.navbarIsNotVisible)
  }

  resetNavbar() {
    this.navbarIsNotVisible= true;
  }

}
