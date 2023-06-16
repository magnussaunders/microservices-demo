import { Module } from '@nestjs/common';
import { ApiServiceController } from './api-service.controller';
import { ApiServiceService } from './api-service.service';
import {ClientsModule, Transport} from "@nestjs/microservices";

@Module({
  imports: [
      ClientsModule.register([
        {
          name: 'user-service',
          transport: Transport.RMQ,
          options: {
            urls: ['amqp://microservices-demo-user:microservices-demo-pass@172.17.0.2:5672/microservices-demo'],
            queue: 'user-queue',
            queueOptions: {
              durable: false
            }
          }
        }
      ])
  ],
  controllers: [ApiServiceController],
  providers: [ApiServiceService],
})
export class ApiServiceModule {}
