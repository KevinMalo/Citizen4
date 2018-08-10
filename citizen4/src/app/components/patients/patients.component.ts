import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service'; // Importamos el servicio

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  public patients = []; // Aqui guardaremos todos los datos obtenidos de afs

  // Renombramos con un alias al servicio (buena practica el guion bajo al inicio)
  constructor( public _crudService: CrudService  ) {

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
