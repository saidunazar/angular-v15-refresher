import {
  Component,
  OnDestroy,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() childMessage: string;
  @Output() messageEvent = new EventEmitter<string>();

  message = 'Sample view child message!';
  currentDate = new Date();
  name = 'Saidu';

  constructor() {}

  ngOnInit(): void {
    console.log(`Child component rendered`);
  }

  sendMessage() {
    this.messageEvent.emit('This message is send from the child component');
  }
}
