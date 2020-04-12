import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Appointment } from 'src/app/shared/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private firestore: AngularFirestore) { }

  getBookings() {
    return this.firestore.collection('appointments').snapshotChanges();
}

createBooking(appointment: Appointment){
  return this.firestore.collection('appointments').add(appointment);
}

updateBooking(appointment: Appointment){
  delete appointment.id;
  this.firestore.doc('appointments/' + appointment.id).update(appointment);
}

deleteBooking(appointmentId: string){
  this.firestore.doc('appointments/' + appointmentId).delete();
}

}
