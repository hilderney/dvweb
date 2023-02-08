import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DATALISTMOCK } from 'src/app/shared/mock';
import { ICliente } from 'src/app/shared/interface/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ListarService {

  constructor(
    private http: HttpClient
  ) { }


}
