import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './commons/footer/footer.component';
import { HeaderComponent } from './commons/header/header.component';
import { SectionComponent } from './commons/section/section.component';
import { CategoriesService } from './services/catalog/categories.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BackupDBComponent } from './generateFiles/backup-db/backup-db.component';
import { BackupDBService } from './services/recovery/backup-db.service';
import { CreateUserComponent } from './commons/forms/create-user/create-user.component';
import { EstudianteComponent } from './commons/forms/create-user/estudiante/estudiante.component';
import { PadresComponent } from './commons/forms/create-user/padres/padres.component';
import { ProfesorComponent } from './commons/forms/create-user/profesor/profesor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BusquedaTipoUserComponent } from './commons/forms/create-user/busqueda-tipo-user/busqueda-tipo-user.component';
import { RolesService } from './services/catalog/roles.service';

// const routes: Routes = [
//   {path: '', redirectTo: '/usuarios', pathMatch: 'full'},
//   // {path: 'usuarios', component: UsersComponent}
// ]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SectionComponent,
    BackupDBComponent,
    CreateUserComponent,
    EstudianteComponent,
    PadresComponent,
    ProfesorComponent,
    BusquedaTipoUserComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule

    // RouterModule.forRoot(routes)
  ],
  providers: [
    CategoriesService,
    BackupDBService,
    RolesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
