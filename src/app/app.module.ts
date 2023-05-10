import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './commons/footer/footer.component';
import { HeaderComponent } from './commons/header/header.component';
import { SectionComponent } from './commons/section/section.component';
import { CategoriesService } from './services/categories.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BackupDBComponent } from './generateFiles/backup-db/backup-db.component';
import { BackupDBService } from './services/backup-db.service';

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
    BackupDBComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule, 
    // RouterModule.forRoot(routes)
  ],
  providers: [CategoriesService,
    BackupDBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
