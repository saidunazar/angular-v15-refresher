import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBackgroundColorWheat]',
})
export class BackgroundColorWheatDirective implements OnInit {
  constructor(private element: ElementRef) {}
  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = 'Wheat';
    this.element.nativeElement.style.color = 'Black';
  }
}
