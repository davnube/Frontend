import { Component, OnInit } from '@angular/core';
import { PersonalDataDTO } from 'src/app/dto/personal-data-dto';
import { ValueLabel } from 'src/app/dto/value-label';
import { RolesService } from 'src/app/services/catalog/roles.service';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
})
export class ProfesorComponent implements OnInit {

  roles! : ValueLabel[];

  profesores!: PersonalDataDTO[];

  private title!: string;

  minDate!: String;

  maxDate!: Date;

  currentDateSelect!: Date;

  id!: number;

  curp!: string;

  name!: string;

  lastName!: string;

  mothersLastName!: string;

  birthday!: string;

  email!: string;

  phone!: string;

  cellphone!: string;

  roleId!: number;

  constructor(private rolesService: RolesService) {}
  ngOnInit(): void {
    var date = new Date();
    this.minDate = date.toISOString().substring(0, 10);
    console.log(this.minDate);
    this.setTitle('Alta de profesores');
    // this.rolesService.getRoles().subscribe({});

  }

  public getTitle() {
    return this.title;
  }

  public setTitle(title: string) {
    this.title = title;
  }

  agregarProfesores(){
    let persona = new PersonalDataDTO();
    persona.seId(this.id);
    this.profesores.push(persona);

  }
}
