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

  constructor() { }

  ngOnInit() {
  }

}
