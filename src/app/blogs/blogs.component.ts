import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes} from '@angular/animations';

@Component({
  selector: 'app-comments',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
  animations: [
    trigger('commentsAnim', [
      state('active', style({
        opacity: '1'
      })),
      transition('void => *', [
        style({transform: 'translateX(-40px)', opacity: '0'}),
        animate('1000ms ease-in-out')
      ]),
      transition('* => void', [
        animate('700ms ease-in-out', style({transform: 'translateX(-40px)', opacity: '0'}))
      ])
    ])
  ]
})
export class BlogsComponent {

  comments = [
    { "title": 'Front End Developer job', "description": "Please apply today!" }
  ];

  title:string = '';
  description:string = '';
  state = 'active';

  addComments(value:any) {
    this.comments.push({'title': value.title, 'description': value.description});
    this.title = '';
    this.description = '';
  }

  removeComment(comment) {
    this.comments.splice(comment, 1);
  }

}
