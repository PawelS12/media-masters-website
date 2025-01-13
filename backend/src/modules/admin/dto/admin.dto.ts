import { Exclude } from 'class-transformer';
import { Administrator } from '@prisma/client';

export class AdminDto implements Administrator {
  @Exclude()
  password: string;

  @Exclude()
  createdAt: Date;
  id: number;
  username: string;
}
