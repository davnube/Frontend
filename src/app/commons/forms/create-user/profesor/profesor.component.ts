import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit{

  private title!: string;

  minDate!: String;
  maxDate!: Date;
  currentDateSelect!: Date;

  constructor(){


  }
  ngOnInit(): void {

    var date = new Date();
    this.minDate = date.toISOString().substring(0,10);
    console.log(this.minDate);
    this.setTitle('Alta de profesores');
  }

  public getTitle(){
    return this.title;
  }

  public setTitle(title:string){
    this.title = title;
  }

}
