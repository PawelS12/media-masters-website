import { Injectable } from '@nestjs/common';
import { CreateAppointmentsDto } from './dto/create-appointments.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AppointmentsService {
  constructor(private readonly Prisma: PrismaService) {}

  async findAll() {
    return this.Prisma.appointment.findMany({});
  }

  findOne(id: number) {
    return this.Prisma.appointment.findUnique({
      where: { id },
    });
  }

  remove(id: number) {
    return this.Prisma.appointment.delete({
      where: { id },
    });
  }

  async create(data: CreateAppointmentsDto) {
    return this.Prisma.appointment.create({
      data: {
        name: data.name,
        email: data.email,
        date: data.date,
      },
    });
  }
}
