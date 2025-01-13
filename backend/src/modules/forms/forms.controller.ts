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
import { FormsService } from './forms.service';
import { CreateFormsDto } from './dto/create-forms.dto';
import { AppointmentNotfoundException } from '../../exceptions/appointment-notfound-exception';
import { TokenGuard } from '../auth/token.guard';

@Controller('forms')
export class FormsController {
  constructor(private formsService: FormsService) {}

  @Post()
  createForm(@Body() data: CreateFormsDto) {
    return this.formsService.create(data);
  }

  @Get()
  @UseGuards(TokenGuard)
  findAllForms() {
    return this.formsService.findAll();
  }

  @Get(':id')
  @UseGuards(TokenGuard)
  async findOneForm(@Param('id', ParseIntPipe) id: number) {
    const form = await this.formsService.findOne(id);

    if (!form) {
      throw new AppointmentNotfoundException();
    }

    return form;
  }

  @Delete(':id')
  @HttpCode(204)
  @UseGuards(TokenGuard)
  async deleteForm(@Param('id', ParseIntPipe) id: number) {
    const form = await this.formsService.findOne(id);

    if (!form) {
      throw new AppointmentNotfoundException();
    }

    await this.formsService.remove(id);
  }
}
