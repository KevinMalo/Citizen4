import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { log } from 'util';

interface Patient {
  nombre: String;
  documento: String;
  ciudad: String;
  url: String;
  sintoma: String;
}

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  isLinear = true;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;

  // Patient: Patient = {
  //   nombre: this.firstFormGroup.value,
  //   documento: this.secondFormGroup.value,
  //   ciudad: this.thirdFormGroup.value,
  //   url: this.fourthFormGroup.value,
  //   sintoma: this.fifthFormGroup.value
  // };


  constructor( private _formBuilder: FormBuilder ) { }

  loger() {
    console.log({
    nombre: this.firstFormGroup.value,
    documento: this.secondFormGroup.value,
    ciudad: this.thirdFormGroup.value,
    url: this.fourthFormGroup.value,
    sintoma: this.fifthFormGroup.value}
    );
  }

  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
      nombre: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });

  }

}
