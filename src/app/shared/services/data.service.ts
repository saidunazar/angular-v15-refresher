import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { from, of } from 'rxjs';

interface user {
  name: string;
  age: number;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  data: Array<user> = [
    { name: 'Saidu', age: 30 },
    { name: 'Farzana', age: 29 },
    { name: 'Motu', age: 7 },
    { name: 'Tom', age: 10 },
  ];

  getData(): Observable<user> {
    return from(this.data).pipe(
      map((val) => ({
        ...val,
        age: val.age * 2,
      })),
      filter((user) => user.age >= 50)
    );
  }
  getFullData(): Observable<user[]> {
    return of(this.data);
  }
}
