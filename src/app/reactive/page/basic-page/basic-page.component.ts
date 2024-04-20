import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent {

  public myForm = this.fb.group({
    'name':     ['',[ Validators.required, Validators.minLength(3) ]],
    'price':    [0, [ Validators.max(20) ]],
    'inStorage':[0, [ Validators.min(5) ]],
  })

  constructor( private fb: FormBuilder){}

  onSave(){
    console.log( this.myForm.value )
    this.myForm.reset({ price: 0, inStorage: 0 })
  }


}
