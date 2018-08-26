import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence() /// Guardar datos offline
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
