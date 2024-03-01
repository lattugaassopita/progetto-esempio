import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  navbarIsOff: boolean = true;
  propicNotClicked: boolean = true;

  clickOnTheMagnifyingGlass() {
    this.navbarIsOff=!this.navbarIsOff;
    console.log("is the navbar off?", this.navbarIsOff)
  }

  clickOnThePropic() {
    this.propicNotClicked=!this.propicNotClicked;
    console.log("Did you cliked on the propic?", this.propicNotClicked);
  }
}
