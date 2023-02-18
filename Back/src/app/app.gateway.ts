import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  } from '@nestjs/websockets';
  import { Socket, Server } from 'socket.io';
import { AppService } from './app.service';
import { Msg } from './entities/msg.entity';
  
  @WebSocketGateway({
    cors: {
      origin: '*',
    },
   })
  export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    constructor(private appService: AppService) {

    }

    @WebSocketServer() 
    server: Server;
    
    @SubscribeMessage('sendMessage')
    async handleMessage(client: Socket, payload: Msg) {
      await this.appService.createMessage(payload);
      this.server.emit(`recMessage${payload.receiverId}`, payload);
    }
  
    afterInit(server: Server) {
      console.log(server);
    }
  
    handleDisconnect(client: Socket) {
      console.log(`Disconnected: ${client.id}`);
    }
  
    handleConnection(client: Socket, ...args: any[]) {
      console.log(`Connected ${client.id}`);
    }
  }