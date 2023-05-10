import { Component } from '@angular/core';
import { BackupDBService } from 'src/app/services/backup-db.service';
import { ValueBoolean } from 'src/app/services/value-boolean';


@Component({
  selector: 'app-backup-db',
  templateUrl: './backup-db.component.html',
  styleUrls: ['./backup-db.component.css']
})
export class BackupDBComponent {

  valueBoolean! : ValueBoolean;

  mensaje! :string;

  constructor(private backupDBService: BackupDBService) {
  }

  ngOnInit() {
    this.backupDBService.getBackupDB().subscribe((valueBoolean)=>{
      if(valueBoolean.response){
        this.mensaje = 'La informacion se cargo correctamente';
      }else{
        this.mensaje = 'Error';
      }
    });
    

    
   // console.log(this.backupDBService.getBackupDB().subscribe());
  }

  clickItem(){
    alert(this.mensaje);
  }

}