import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Appointment } from 'src/app/shared/appointment';
import { AppointmentService } from 'src/app/shared/appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.page.html',
  styleUrls: ['./make-appointment.page.scss'],
})
export class MakeAppointmentPage implements OnInit {

  appointmentForm: FormGroup;
  appointment: Appointment;

  constructor( private formBuilder: FormBuilder, private appointmentService: AppointmentService, private router: Router) {
  }

  ngOnInit() {
    this.createAppointmetForm();
  }

  createAppointmetForm() {
    this.appointmentForm = this.formBuilder.group({
      name: [''],
      email: [''],
      mobile: ['']
    });
  }

  onSubmit() {
    this.appointmentService.createBooking(this.appointmentForm.value);
    this.createAppointmetForm();
    this.router.navigate(['/home']);
} 

}
