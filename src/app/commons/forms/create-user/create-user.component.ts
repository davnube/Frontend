import { Component, OnInit } from '@angular/core';
import * as intlTelInput from 'intl-tel-input';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html'
})
export class CreateUserComponent implements OnInit{

  private title! : string;

  constructor(){

  }
  ngOnInit(): void {
    this.setTitle('Formulario creación de ');
    const inputElement = document.getElementById('phone');
    const inputElement2 = document.getElementById('phoneHome');
    if(inputElement){
      intlTelInput(inputElement,{
        initialCountry: 'mx',
        separateDialCode: true,
        utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js'
      });
    }
    if(inputElement2){
      intlTelInput(inputElement2,{
        initialCountry: 'mx',
        separateDialCode: true,
        utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js'
      });
    }
  }

  public getTitle(){
    return this.title;
  }

  public setTitle(title: string){
    this.title = title;
  }




}
