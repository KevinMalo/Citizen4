import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CrudService } from '../../services/crud.service';


@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  // Fuerza al usuario a escribir secuencialmente los datos
  isLinear = true;

  nombreFormGroup: FormGroup;
  documentoFormGroup: FormGroup;
  ciudadFormGroup: FormGroup;
  sintomaFormGroup: FormGroup;
  urlFormGroup: FormGroup;

  // Envía los datos del formulario a nuestro BD
  dataForm() {

     // Guarda los datos escritos en el formulario
     const DATA = {
      nombre: this.nombreFormGroup.value.nombre,
      documento: this.documentoFormGroup.value.documento,
      ciudad: this.ciudadFormGroup.value.ciudad,
      sintomas: this.sintomaFormGroup.value.sintoma,
      url: this.urlFormGroup.value.url
    };

    // Envía los datos a nuestro CrudServices para que los envíe a FireStore
    this._crudService.createPatient(DATA).then(() => {
       console.log('Documento creado exitósamente!');
     }, (error) => {
      console.error(error);
    });

  }


  constructor( private _formBuilder: FormBuilder, public _crudService: CrudService ) { }

  ngOnInit() {

    this.nombreFormGroup = this._formBuilder.group({
      nombre: ['', Validators.required]
    });
    this.documentoFormGroup = this._formBuilder.group({
      documento: ['', Validators.required]
    });
    this.ciudadFormGroup = this._formBuilder.group({
      ciudad: ['', Validators.required]
    });
    this.sintomaFormGroup = this._formBuilder.group({
      sintoma: ['', Validators.required]
    });
    this.urlFormGroup = this._formBuilder.group({
      url: ['', Validators.required]
    });

  }

}
