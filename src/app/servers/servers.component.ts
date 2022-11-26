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
serverCreationStatus="No Server Created";
serverName="";
serverName2Way="Test Server";
constructor(){
  setTimeout(() => {
    this.allowNewServer=true;
  }, 3000);
}

onCreateServer()
{
  this.serverCreationStatus="Server Created";
}
onUpdateServer(event:any)
{
  console.log(event);
  this.serverName=(<HTMLInputElement>event.target).value;
}

}

