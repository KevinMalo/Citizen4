import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  editarFormGroup: FormGroup;

  constructor( private _formBuilder: FormBuilder, public _crudService: CrudService ) { }

  ngOnInit() {

    this.editarFormGroup = this._formBuilder.group({
      nombre: ['', Validators.required]
    });

  }

}
