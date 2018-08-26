import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatStepperModule} from '@angular/material/stepper';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatCardModule,
            MatToolbarModule, MatIconModule, MatDialogModule,
            MatTooltipModule, MatStepperModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule,
            MatToolbarModule, MatIconModule, MatDialogModule,
            MatTooltipModule, MatStepperModule],
})
export class MaterialModule { }
