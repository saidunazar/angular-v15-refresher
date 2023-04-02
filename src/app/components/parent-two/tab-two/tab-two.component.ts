import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';

interface user {
  name: string;
  age: number;
}

@Component({
  selector: 'app-tab-two',
  templateUrl: './tab-two.component.html',
  styleUrls: ['./tab-two.component.scss'],
})
export class TabTwoComponent implements OnInit, OnDestroy {
  constructor(private dataServive: DataService) {}

  userData: Array<user> = [];
  getData;

  ngOnInit(): void {
    this.getData = this.dataServive.getData().subscribe({
      next: (val) => {
        this.userData.push(val);
      },
      error: (err) => console.log(err),
      complete: () => console.log('Completed'),
    });
  }

  ngOnDestroy(): void {
    this.getData.unsubscribe();
    console.log('unsubcribed');
  }
}
