import { NotFoundException } from '@nestjs/common';

export class AppointmentNotfoundException extends NotFoundException {
  constructor() {
    super('Appointment not found');
  }
}
