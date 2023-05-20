import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padres',
  templateUrl: './padres.component.html'
})
export class PadresComponent implements OnInit{

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
    this.setTitle('Alta de tutores');
  }

  public getTitle(){
    return this.title;
  }

  public setTitle(title:string){
    this.title = title;
  }

}
