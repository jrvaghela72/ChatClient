import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SignupService } from './signup.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SingupComponent implements OnInit {

  signupForm: FormGroup = new FormGroup({
    user_name: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    full_name: new FormControl(''),
  });

  constructor(private readonly signupService:SignupService) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      this.signupService.signUp(this.signupForm.value);
    }
  }
  
  @Input() error: string | null;

}
