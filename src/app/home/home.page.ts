import { Component } from '@angular/core';
import { Appointment } from 'src/app/shared/appointment';
import { AppointmentService } from 'src/app/shared/appointment.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  appointments: Appointment[];
  constructor(private appointmentService: AppointmentService) {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.appointmentService.getBookings().subscribe(data => {
      this.appointments = data.map(e => {
        const id = e.payload.doc.id;
        // tslint:disable-next-line: no-shadowed-variable
        const data = e.payload.doc.data() as Appointment;
        return { id, ...data };
      });
    });
  }

  delete(id: string) {
    this.appointmentService.deleteBooking(id);
  }


}
