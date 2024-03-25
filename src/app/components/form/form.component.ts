import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  event = {name: '', bio: '', price: '', date: Date, place: '', organiser: false, rules: false}

  ciao(form: NgForm) {
    console.log("NgSubmit is working");
    console.log("the form contain:", form.value)
  }

}
