import { Controller } from '@nestjs/common';
import { UserServiceService } from './user-service.service';
import {Ctx, MessagePattern, Payload, RmqContext} from "@nestjs/microservices";
import {User} from "./interfaces/user.interface";

@Controller()
export class UserServiceController {
  constructor(private readonly userServiceService: UserServiceService) {}

  @MessagePattern('create-user')
  createUser(@Payload() user: User, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef()
    const msgReference = context.getMessage()
    channel.ack(msgReference)

    return this.userServiceService.createUser(user)
  }
}
