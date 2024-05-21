import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import bootstrap from 'bootstrap';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule, CommonModule , JsonPipe],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {

  isFormSubmmited:boolean=false;

  userObj : any = {
    email : '',
    password : '',
    address : '',
    address2 : '',
    city : '',
    state : '',
    zip : '',
    isAgree : false
  }

  onSubmit(form: NgForm) {
    this.isFormSubmmited = true
    console.log(form.valid)
    if(form.valid){
      console.log(form.value)
    }
  }
}
