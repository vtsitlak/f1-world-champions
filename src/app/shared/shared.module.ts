import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';

const MATERIAL_MODULES: any[] = [
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatDividerModule,
  MatTableModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    MATERIAL_MODULES,
  ],
  exports: [
    HttpClientModule,
    FlexLayoutModule,
    MATERIAL_MODULES,
  ],
})

export class SharedModule { }
