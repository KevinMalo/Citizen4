import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';

// Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';

// Imports Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// Configuracion Firebase
import { environment } from '../environments/environment';

// Componentes
import { AppComponent } from './app.component';
import { PatientsComponent } from './components/patients/patients.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';

// Servicios
import { CrudService } from './services/crud.service';
import { EditPatientComponent } from './components/edit-patient/edit-patient.component';


@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    AddPatientComponent,
    EditPatientComponent
  ],
  entryComponents: [
    EditPatientComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence() /// Guardar datos offline
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
