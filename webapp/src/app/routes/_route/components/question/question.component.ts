import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  @Input() user: Models.User;
  @Input() questionTitle: string;

  constructor() {}

  ngOnInit() {}
}
