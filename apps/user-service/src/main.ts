import { NestFactory } from '@nestjs/core';
import { UserServiceModule } from './user-service.module';
import { Transport, MicroserviceOptions} from "@nestjs/microservices";

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
      UserServiceModule,
      {
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://guest:guest@rabbit-mq:5672'],
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
