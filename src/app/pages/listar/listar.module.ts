import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ListarComponent } from './listar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListarRoutingModule } from './listar-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ListarRoutingModule,
  ],
  declarations: [ListarComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class ListarModule { }
