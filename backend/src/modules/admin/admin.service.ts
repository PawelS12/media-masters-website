import { ConflictException, Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as argon2 from 'argon2';

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAdminDto: CreateAdminDto) {
    const passHash = await argon2.hash(createAdminDto.password);
    try {
      return await this.prisma.administrator.create({
        data: {
          username: createAdminDto.username,
          password: passHash,
        },
      });
    } catch (e) {
      if (e.code == 'P2002') {
        throw new ConflictException('Użytkownik już istnieje');
      }
    }
  }

  async findOne(adminId: number) {
    return this.prisma.administrator.findUnique({
      where: {
        id: adminId,
      },
    });
  }
}
