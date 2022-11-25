import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
serverId: number =10;
serverStatus:string='Offline';
allowNewServer =false;
constructor(){
  setTimeout(() => {
    this.allowNewServer=true;
  }, 6000);
}
}

