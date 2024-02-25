import { Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CarouselComponent {

}
