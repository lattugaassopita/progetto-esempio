import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
event: Event =  {eventName: '', eventBio: '', eventPrice: 0, eventOrg: false}


  sendForm(form:NgForm) {
    console.log("sendForm() is working");
    console.log(form.value);
  }

}

type Event = {eventId?: string, eventName: string, eventBio?: string, eventPrice: number, eventDate?: Date, eventPic?: File, eventOrg: boolean}