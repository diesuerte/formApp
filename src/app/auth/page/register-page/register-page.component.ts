import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cantBeStrider, emailPattern, firstNameAndLastnamePattern } from '../../../shared/validators/validators';
import { ValidatorsService } from '../../../shared/services/validators.service';

@Component({
  selector: 'auth-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  public myform: FormGroup = this.fb.group({

    name:['', [Validators.required, Validators.pattern(this.validator.firstNameAndLastnamePattern)]],
    email:['', [Validators.required, Validators.pattern(this.validator.emailPattern)]],
    username:['', [Validators.required, this.validator.cantBeStrider]],
    password:['', [Validators.required, Validators.minLength(6)]],
    password2:['', [Validators.required]]

  })

  constructor(
    private validator: ValidatorsService,
    private fb: FormBuilder) {}

  onSubmit(){

    this.myform.markAllAsTouched();
  }

  isValidFiel( field:string ) {

    this.validator.isValidField( this.myform, field )

  }
}
