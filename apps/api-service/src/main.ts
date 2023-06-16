import { NestFactory } from '@nestjs/core';
import { ApiServiceModule } from './api-service.module';
import {Transport} from "@nestjs/microservices";

async function bootstrap() {
  const app = await NestFactory.create(ApiServiceModule);
  // app.connectMicroservice({
  //   transport: Transport.RMQ,
  //   option: {
  //     urls: ['amqp://microservices-demo-user:microservices-demo-pass@172.17.0.2:5672/microservices-demo'],
  //     queue: 'shared-queue',
  //     queueOptions: {
  //       durable: false
  //     }
  //   }
  // })
  // await app.startAllMicroservices()
  await app.listen(3000);
}
bootstrap();
