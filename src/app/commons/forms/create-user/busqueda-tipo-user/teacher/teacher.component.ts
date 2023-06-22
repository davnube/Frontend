import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { UsuarioBasicoDTO } from 'src/app/dto/usuario-basico-dto';
import { ListTeacherBySearchService } from 'src/app/services/catalog/list-teacher-by-search.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
})
export class TeacherComponent implements OnChanges, OnInit {
  @Output() listadoUsuarios = new EventEmitter<UsuarioBasicoDTO[]>();

  @Input() search: String;

  @Input() value: Number;

  data: String;

  usuariosBasicoDTO: UsuarioBasicoDTO[];

  suscription: Subscription;

  constructor(private listTeacherBySearchService: ListTeacherBySearchService) {}
  ngOnInit(): void {
    if (this.value == 1) {
    } else {
      this.listTeacherBySearchService.setSearch('');
      this.listTeacherBySearchService.setNoPag(0);

      this.listTeacherBySearchService.getTeacher().subscribe((response) => {
        this.usuariosBasicoDTO = response.content as UsuarioBasicoDTO[];
        this.listadoUsuarios.emit(this.usuariosBasicoDTO);
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.value == 1) {
    } else {
      this.getUsersStudent(changes);
    }
    this.getUsersTeacher(changes);
  }

  getUsersTeacher(changes: SimpleChanges): void {
    if (changes['search'].currentValue != undefined) {
      this.data = changes['search'].currentValue;
      this.listTeacherBySearchService.setSearch(this.data);
      this.listTeacherBySearchService.setNoPag(0);
      this.listTeacherBySearchService.getTeacher().subscribe((response) => {
        this.usuariosBasicoDTO = response.content as UsuarioBasicoDTO[];
        this.listadoUsuarios.emit(this.usuariosBasicoDTO);
      });
    }
  }

  getUsersStudent(changes: SimpleChanges): void {
    if (changes['search'].currentValue != undefined) {
      this.data = changes['search'].currentValue;
      this.listTeacherBySearchService.setSearch(this.data);
      this.listTeacherBySearchService.setNoPag(0);
      this.listTeacherBySearchService.getTeacher().subscribe((response) => {
        this.usuariosBasicoDTO = response.content as UsuarioBasicoDTO[];
        this.listadoUsuarios.emit(this.usuariosBasicoDTO);
      });
    }
  }
}
