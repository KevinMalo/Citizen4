import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { Observable } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  categories: Observable<any[]>;

  constructor( public _crudService: CrudService  ) {

  }

  ngOnInit() {

    this.categories = this._crudService.getCategories();
    console.log(this.categories);

  }

}
