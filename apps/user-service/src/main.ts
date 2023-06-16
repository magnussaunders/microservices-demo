import { NestFactory } from '@nestjs/core';
import { UserServiceModule } from './user-service.module';
import { Transport, MicroserviceOptions} from "@nestjs/microservices";

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
      UserServiceModule,
      {
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://microservices-demo-user:microservices-demo-pass@172.17.0.2:5672/microservices-demo'],
          queue: 'user-queue',
            noAck: false,
          queueOptions: {
            durable: false
          }
        }
      });
  await app.listen();
}
bootstrap();
