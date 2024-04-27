import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-switches-page',
  templateUrl: './switches-page.component.html',
  styleUrl: './switches-page.component.css'
})
export class SwitchesPageComponent implements OnInit{

  public myform: FormGroup = this.fb.group({
    gender: ['M', [Validators.required]],
    wantNotification:[true, Validators.required],
    termsAndCondition:[false, Validators.requiredTrue]
  })

  public person = {
    gender: 'F',
    wantNotification:false
  }

  constructor( private fb: FormBuilder){}

  ngOnInit(): void {
    this.myform.reset( this.person )
  }

  /* isValidField( field: string ): boolean | null {
    return this.myform.controls[field].errors
    && this.myform.controls[field].touched;
  } */

  onSave(){
    if(this.myform.invalid){
      this.myform.markAllAsTouched();
      return;
    }
    //desustructurar el objeto para un nuevo objeto menos termsAndCondition
    const { termsAndCondition, ...newPerson } = this.myform.value

   /*  this.person = newPerson */
    console.log(this.myform.value);
    console.log(this.person);


  }
}


