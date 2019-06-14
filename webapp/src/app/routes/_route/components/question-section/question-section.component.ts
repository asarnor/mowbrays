import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question-section',
  templateUrl: './question-section.component.html',
  styleUrls: ['./question-section.component.scss'],
})
export class QuestionSectionComponent implements OnInit {
  @Input() user: Models.User;
  @Input() questionTitle: string;

  constructor() {}

  ngOnInit() {}
}
