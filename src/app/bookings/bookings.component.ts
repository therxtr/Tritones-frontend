import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service'; // Import the service
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})

export class BookingsComponent {

  formData = {
    name: '',
    subject: '',
    email: '',
    message: ''
  };


  constructor(private http: HttpClient) {}

  onSubmit() {
    console.log('onSubmit function called');
    console.log(this.formData)
    this.http.post('http://127.0.0.1:8000/contactData/', this.formData).subscribe(
        (response) => {
          console.log('Form submitted successfully', response);
          // Handle success (e.g., show a success message)
        },
        (error) => {
          console.error('Form submission error', error);
          // Handle error (e.g., display an error message)
        }
      );
  }
}
