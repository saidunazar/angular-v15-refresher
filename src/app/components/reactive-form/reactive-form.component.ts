import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.myForm = this.fb.group({
      personalDetails: this.fb.group({
        uname: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
      }),
      password: ['', [Validators.required]],
      nicknames: this.fb.array([this.fb.control('')]),
    });
  }

  get nicknames() {
    return this.myForm.get('nicknames') as FormArray;
  }

  addNickname() {
    this.nicknames.push(this.fb.control(''));
  }

  handleSubmit(): void {
    console.log(this.myForm.value);
    console.log(this.myForm.get('password').value);
  }
}
