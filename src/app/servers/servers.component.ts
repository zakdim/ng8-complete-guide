import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // select by element
  // selector: '[app-servers]', // by attrubute
  // selector: '.app-servers', // by class
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer(event) {
    console.log(`Button: ${event.target}`);
    this.serverCreationStatus = 'Server was created!';
  }

  onButtonBlur(event: any) {
    console.log(`Button '${event.target.innerText}' blur event occurred`);
  }
}
