import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HexaButtonComponent } from './components/hexa-button/hexa-button.component';



@NgModule({
  declarations: [HexaButtonComponent],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  exports: [
    HexaButtonComponent
  ]
})
export class SharedModule { }
