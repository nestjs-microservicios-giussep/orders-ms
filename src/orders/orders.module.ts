import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { env, NATS_SERVER } from '../config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: NATS_SERVER,
        transport: Transport.NATS,
        options: {
          servers: env.natsServers,
        },
      },
    ]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
