import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';


@Injectable()
export class CrudService {

  private categories$: AngularFirestoreCollection<any>;

  constructor( private afs: AngularFirestore ) {

    this.categories$ = this.afs.collection('categories');

    console.log('Service CRUD On');

   }

  getCategories() {
    return this.categories$.valueChanges();
   }

}
