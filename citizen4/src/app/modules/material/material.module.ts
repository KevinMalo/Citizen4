import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatCardModule,
            MatToolbarModule, MatIconModule, MatDialogModule,
            MatTooltipModule, MatStepperModule, MatFormFieldModule,
            MatInputModule, MatSelectModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule,
            MatToolbarModule, MatIconModule, MatDialogModule,
            MatTooltipModule, MatStepperModule, MatFormFieldModule,
            MatInputModule, MatSelectModule],
})
export class MaterialModule { }
