import { OrdersStatus } from '@prisma/client';

export const OrderStatusList = [
  OrdersStatus.CANCELLED,
  OrdersStatus.DELIVERED,
  OrdersStatus.PENDING,
];
