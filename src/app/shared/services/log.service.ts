import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  constructor() {}

  logMessage(message: string): void {
    console.log(message);
  }
}
