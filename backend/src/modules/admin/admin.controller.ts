import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { plainToInstance } from 'class-transformer';
import { AdminDto } from './dto/admin.dto';
import { TokenGuard } from '../auth/token.guard';
import { AdminID } from '../auth/admin.decorator';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  async create(@Body() createAdminDto: CreateAdminDto) {
    const admin = await this.adminService.create(createAdminDto);
    return plainToInstance(AdminDto, admin);
  }

  @Get('/me')
  @UseGuards(TokenGuard)
  async me(@AdminID() adminId: number) {
    const admin = await this.adminService.findOne(adminId);
    return plainToInstance(AdminDto, admin);
  }
}
