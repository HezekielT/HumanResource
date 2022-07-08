import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table'

const materials = [
  MatSliderModule,
  MatToolbarModule,
  MatTableModule
]

@NgModule({
  imports: [ materials ],
  exports: [ materials ]
})
export class MaterialModule { }
