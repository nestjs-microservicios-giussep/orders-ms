import { OrdersStatus } from '@prisma/client';
import { IsEnum, IsNumber, IsOptional, IsPositive } from 'class-validator';
import { OrderStatusList } from '../enum/order.enum';

export class PaginationDto {
  @IsNumber()
  @IsPositive()
  page: number = 1;

  @IsNumber()
  @IsPositive()
  limit: number = 10;

  @IsOptional()
  @IsEnum(OrdersStatus, {
    message: `Los estatus validos son ${OrderStatusList}`,
  })
  status: OrdersStatus;
}
