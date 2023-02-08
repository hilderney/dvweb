import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DATALISTMOCK } from 'src/app/shared/mock';
import { ICliente } from 'src/app/shared/interface/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private http: HttpClient
  ) { }

  buscarClientes(): Observable<any> {
    return this.http.get('https://demo4231135.mockable.io/', {responseType: 'text'});
  }

  cadastrarCliente(client: any) {
    console.warn('INCLUINDO NOVO CLIENTE');
    console.log(JSON.stringify(client));
    confirm('cliente criado, verifique no log');
  // return this.http.post('https://demo4231135.mockable.io/cadastrar', client);
  }
  editarCliente(client: any) {
      console.warn(`EDITANDO CLIENTE id = ${client.id}`);
      console.log(JSON.stringify(client));
      confirm(`cliente de id ${client.id} editado, verifique no log`);
  // return this.http.post('https://demo4231135.mockable.io/editar/' + client.id, client);
  }

  fixJsonString(str: string) {
    return str.replace(/\,(?!\s*?[\{\[\"\'\w])/g, '');
  }

}
