import { AfterViewInit } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements AfterViewInit {
  childMessage = 'Sample message for the child component.';
  @ViewChild(ChildComponent) child;
  testString = 'This is a test string';

  constructor() {}

  displayMessage(message) {
    alert(message);
  }

  ngAfterViewInit() {
    console.log(this.child.message);
  }
}
