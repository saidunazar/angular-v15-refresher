import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent {
  fname: string = '';
  lname: string = '';
  email: string = '';
  @ViewChild('myForm') myform: NgForm;

  constructor() {}

  handleSubmit(form: NgForm): void {
    // this.fname = form.value.nameGroup.fname;
    // this.email = form.value.email;
  }

  setFormValue(form: NgForm): void {
    this.myform.form.patchValue({
      nameGroup: {
        fname: 'Farzana',
        lname: 'Chotta',
      },
      email: 'chota@chot.com',
    });
  }

  patchFormValue(): void {
    this.myform.form.patchValue({
      nameGroup: {
        fname: 'Googoo',
      },
      email: 'gogogg@goole.com',
    });
  }
}
