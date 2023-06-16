import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from "@nestjs/microservices";
import {firstValueFrom} from "rxjs";

@Injectable()
export class ApiServiceService {
  constructor(
      @Inject('user-service') private readonly userClient: ClientProxy
  ) {
    this.userClient.connect().catch(error => console.log(error))
  }

  createUser() {
    return firstValueFrom(this.userClient.send('create-user', {name: 'Magnus'}))
  }
}
