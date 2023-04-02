import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { LogService } from '../../../shared/services/log.service';

interface nameType {
  name: string;
}

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.scss'],
})
export class ChildTwoComponent implements OnInit {
  constructor(
    private logService: LogService,
    private renderer: Renderer2,
    private element: ElementRef
  ) {}

  ngOnInit(): void {
    this.logService.logMessage("Hello I am Saidu Nazar. What's up?");
    this.renderer.setStyle(this.element.nativeElement, 'color', 'wheat');
  }

  showText: boolean = false;

  nameList: Array<nameType> = [
    { name: 'Saidu' },
    { name: 'Tom' },
    { name: 'Jerry' },
  ];

  nameCondition: nameType = { name: 'Motu' };
}
