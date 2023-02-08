import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { CnpjPipe } from './pipe/cnpj.pipe';

@NgModule({
  declarations: [
    CnpjPipe
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatBadgeModule,
    MatInputModule,

  ],
  exports: [
    CnpjPipe,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatBadgeModule,
    MatInputModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class SharedModule { }
