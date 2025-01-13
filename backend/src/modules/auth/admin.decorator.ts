import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const AdminID = createParamDecorator<number>(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.adminId;
  },
);
