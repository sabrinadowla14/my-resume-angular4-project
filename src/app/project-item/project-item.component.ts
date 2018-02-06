import { Component } from '@angular/core';

@Component({
  selector: 'project-item',
  templateUrl: './project-item.component.html',
  styleUrls: [ './project-item.css'],
  inputs: ['project']
})
export class ProjectItemComponent  { }