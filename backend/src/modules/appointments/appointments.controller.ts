import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentsDto } from './dto/create-appointments.dto';
import { AppointmentNotfoundException } from '../../exceptions/appointment-notfound-exception';
import { TokenGuard } from '../auth/token.guard';

@Controller('appointments')
export class AppointmentsController {
  constructor(private appointmentsService: AppointmentsService) {}

  @Post()
  createAppointment(@Body() data: CreateAppointmentsDto) {
    return this.appointmentsService.create(data);
  }

  @Get()
  @UseGuards(TokenGuard)
  findAllAppointments() {
    return this.appointmentsService.findAll();
  }

  @Get(':id')
  @UseGuards(TokenGuard)
  async findOneAppointment(@Param('id', ParseIntPipe) id: number) {
    const appointment = await this.appointmentsService.findOne(id);

    if (!appointment) {
      throw new AppointmentNotfoundException();
    }

    return appointment;
  }

  @Delete(':id')
  @HttpCode(204)
  @UseGuards(TokenGuard)
  async deleteAppointment(@Param('id', ParseIntPipe) id: number) {
    const appointment = await this.appointmentsService.findOne(id);

    if (!appointment) {
      throw new AppointmentNotfoundException();
    }

    await this.appointmentsService.remove(id);
  }
}
