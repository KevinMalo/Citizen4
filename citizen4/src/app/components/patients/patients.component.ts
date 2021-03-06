import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service'; // Importamos el servicio
import {MatDialog, MatDialogConfig} from '@angular/material';
import { EditPatientComponent } from '../edit-patient/edit-patient.component';


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  // Renombramos con un alias al servicio (buena practica el guion bajo al inicio)
  constructor( public _crudService: CrudService, private dialog: MatDialog  ) {}

  public patients = []; // Aqui guardaremos todos los datos obtenidos de afs

  // Esta funcion recibe el Id del documento a eliminar y lo envía al CRUD.
  deletePaciente(documentId) {

    this._crudService.deletePatient( documentId ).then(() => {
      console.log('Documento eliminado!');
    }, (error) => {
      console.error(error);
    });

  }

  // OpenDialog abre un Modal en donde se mostrará nuestro formulario de edición.
  // La función recibe dos parametros, el Id del documento y los datos de este documento.
  openDialog( documentId, documentData ) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: documentId,
      data: documentData
    };

    // Configuramos el componente que queremos abrir dentro de nuestro Modal y su configuración.
    const dialogRef = this.dialog.open(EditPatientComponent, dialogConfig);

    dialogRef.afterClosed();
  }

  ngOnInit() {

    this._crudService.getPatients().subscribe( (patientsSnapshot) => {
      this.patients = [];
      patientsSnapshot.forEach((patientData: any) => {
        this.patients.push({
          id: patientData.payload.doc.id,
          data: patientData.payload.doc.data()
        });
      });
    });

  }

}
