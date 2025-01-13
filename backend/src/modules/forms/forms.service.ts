import { Injectable } from '@nestjs/common';
import { CreateFormsDto } from './dto/create-forms.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FormsService {
  constructor(private readonly Prisma: PrismaService) {}

  async findAll() {
    return this.Prisma.form.findMany({});
  }

  findOne(id: number) {
    return this.Prisma.form.findUnique({
      where: { id },
    });
  }

  remove(id: number) {
    return this.Prisma.form.delete({
      where: { id },
    });
  }

  async create(data: CreateFormsDto) {
    return this.Prisma.form.create({
      data: {
        name: data.name,
        email: data.email,
        socialMediaPresence: data.socialMediaPresence,
        socialMediaDetails: data.socialMediaDetails,
        industry: data.industry,
        contentIdeas: data.contentIdeas,
        goals: data.goals,
        additionalQuestions: data.additionalQuestions,
      },
    });
  }
}
