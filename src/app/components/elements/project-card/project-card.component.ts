import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() imgPath!: string;
  @Input() projDate!: string;
  @Input() projName!: string;
  @Input() projDesc!: string;
  @Input() projGitLink!: string;
  @Input() projFile!: string;
  @Input() headerRow!: string;

  constructor() { }

  ngOnInit(): void { }
}
