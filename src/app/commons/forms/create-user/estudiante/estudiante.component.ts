import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html'
})
export class EstudianteComponent implements OnInit{

  private title!: string;
  private flag!: boolean;

  minDate!: String;
  maxDate!: Date;
  currentDateSelect!: Date;

  constructor(){


  }
  ngOnInit(): void {

    var date = new Date();
    this.minDate = date.toISOString().substring(0,10);
    console.log(this.minDate);
  // if(flag==true){
  //   this.setTitle('Alta de Alumnos');

  // }else{
  //   this.setTitle('Actualización del Alumno');
  // }


  }

  public getTitle(){
    return this.title;
  }

  public setTitle(title:string){
    this.title = title;
  }

}
