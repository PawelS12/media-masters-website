import { Injectable } from '@nestjs/common';
import * as argon2 from 'argon2';
import { PrismaService } from '../prisma/prisma.service';
import { Administrator } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async verifyAdmin(
    username: string,
    password: string,
  ): Promise<Administrator | null> {
    const admin = await this.prisma.administrator.findUnique({
      where: { username: username },
    });
    if (!admin) return null;
    const isValid = await argon2.verify(admin.password, password);
    if (!isValid) return null;

    return admin;
  }
}
