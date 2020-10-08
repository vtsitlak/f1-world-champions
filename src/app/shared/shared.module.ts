import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL_MODULES: any[] = [
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  MatButtonModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MATERIAL_MODULES,
  ],
  exports: [
    MATERIAL_MODULES,
  ],
})

export class SharedModule { }
