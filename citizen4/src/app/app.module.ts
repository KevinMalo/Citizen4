import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Imports Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// Configuracion Firebase
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { PatientsComponent } from './components/patients/patients.component';

// Servicios
import { CrudService } from './services/crud.service';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence() /// Guardar datos offline
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
