import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wip',
  templateUrl: './wip.component.html',
  styleUrls: ['./wip.component.css']
})
export class WIPComponent implements OnInit {
  @Input() parentComponentName!: string;

  constructor() { }

  ngOnInit(): void { }
}
