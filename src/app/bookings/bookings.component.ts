import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service'; // Import the service
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})

export class BookingsComponent {
  contactForm: FormGroup;
  submissionStatus: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService // Inject the service
  ) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      // Call the service to submit the form data
      this.contactService.submitContactForm(formData)
        .pipe(
          catchError((error) => {
            // Handle error (e.g., show error message)
            this.submissionStatus = 'An error occurred while submitting the form';
            throw error;
          })
        )
        .subscribe(
          (response) => {
            // Submission successful, handle response (e.g., show success message)
            this.submissionStatus = 'Form submitted successfully';
            // Optionally, reset the form
            this.contactForm.reset();
          }
        );
    } else {
      // Form is invalid, show error message or perform other actions
      this.submissionStatus = 'Form is not valid. Please check your inputs.';
    }
  }
}
