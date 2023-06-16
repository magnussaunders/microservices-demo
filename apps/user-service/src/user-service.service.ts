import { Injectable } from '@nestjs/common';
import {User} from "./interfaces/user.interface";

@Injectable()
export class UserServiceService {
  createUser(data: User) {
    data.id = 'new'
    return data
  }
}
