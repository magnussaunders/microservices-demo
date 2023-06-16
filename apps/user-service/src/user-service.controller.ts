import { Controller, Get } from '@nestjs/common';
import { UserServiceService } from './user-service.service';
import {MessagePattern, Payload} from "@nestjs/microservices";
import {User} from "./interfaces/user.interface";

@Controller()
export class UserServiceController {
  constructor(private readonly userServiceService: UserServiceService) {}

  @MessagePattern('create-user')
  createUser(@Payload() user: User) {
    return user.name
  }
}
