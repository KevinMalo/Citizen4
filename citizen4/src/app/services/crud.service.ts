import { Injectable } from '@angular/core';
// Importamos angular firestore y angular collection
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class CrudService {

  // Creamos un alias para el AngularFirestore, en este caso se llamará AFS

  constructor( private afs: AngularFirestore ) {

    // Esta impresion es opcional, la agrego para confirmar que el servicio funcione correctamente
    console.log('Service CRUD On');

   }

   // C.R.U.D en esta parte es donde vamos a crear cada una de las operaciones basicas
   // Crear, Leer, Actualizar y Eliminar

   // Crea un nuevo paciente
  public createPatient(data: {
    nombre: string,
    documento: string,
    ciudad: string,
    sintomas: string,
    url: string}) {
    return this.afs.collection('patients').add(data);
  }

  // Obtiene un paciente
  public getPatient(documentId: string) {
    return this.afs.collection('patients').doc(documentId).snapshotChanges();
  }

  // Obtiene todos los pacientes
  public getPatients() {
    return this.afs.collection('patients').snapshotChanges();
  }

  // Actualiza un paciente
  public updatePatient(documentId: string, data: {
    nombre: string,
    documento: string,
    ciudad: string,
    sintomas: string,
    url: string}) {

    return this.afs.collection('patients').doc(documentId).set(data);
  }

  // Borrar un paciente
  public deletePatient(documentId: string) {
    return this.afs.collection('patients').doc(documentId).delete();
  }

}
