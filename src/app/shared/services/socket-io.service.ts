import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
@Injectable({
  providedIn: 'root',
})
export class SocketIOService {
  socket;
  activeUser: number;

  socketConnectionUrl: string = 'http://localhost:7777';
  constructor() {}

  setupSocketConnection() {
    this.socket = io(this.socketConnectionUrl);
    this.socket.on('counter', (data: any) => {
      this.activeUser = data.count;
    });
  }
}
