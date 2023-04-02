import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tab-one',
  templateUrl: './tab-one.component.html',
  styleUrls: ['./tab-one.component.scss'],
})
export class TabOneComponent implements OnInit {
  routeValue: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeValue = this.route.snapshot.paramMap.get('id');
  }
}
