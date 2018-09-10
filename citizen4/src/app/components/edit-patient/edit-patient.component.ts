import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  editarFormGroup: FormGroup;

  documentId: string;

  patientData = <any>{};

  constructor(  private _formBuilder: FormBuilder,
                private _crudService: CrudService,
                private dialogRef: MatDialogRef<EditPatientComponent>,

                @Inject(MAT_DIALOG_DATA) data ) {

                  this.documentId = data.id;
                  this.patientData = data.data;

                }


  actualizarPaciente() {

    // Obtenemos los valores del formulario

    const formValues = {
      nombre: this.editarFormGroup.value.nombre,
      documento: this.editarFormGroup.value.documento,
      ciudad: this.editarFormGroup.value.ciudad,
      sintomas: this.editarFormGroup.value.sintomas,
      url: this.editarFormGroup.value.url
    };

     this._crudService.updatePatient(this.documentId, formValues);

     this.dialogRef.close();

  }

  closeDialog() {
      this.dialogRef.close();
  }

  ngOnInit() {

    console.log(this.documentId);

    this.editarFormGroup = this._formBuilder.group({
      nombre: ['', Validators.required],
      documento: ['', Validators.required],
      ciudad: ['', Validators.required],
      sintomas: ['', Validators.required],
      url: ['', Validators.required]
    });

  }

}
