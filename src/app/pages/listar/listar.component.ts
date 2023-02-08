import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { ICliente } from 'src/app/shared/interface/cliente.interface';
import { ClienteService } from 'src/app/shared/services/cliente.service';
import { LoaderService } from 'src/app/shared/services/loader.services';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  clientList: ICliente[] = [];
  msg: string = '';

  constructor(
    private service: ClienteService,
    private router: Router,
    public loaderService: LoaderService
  ) { }

  ngOnInit() {
    this.service.buscarClientes().pipe(
      tap((x: string) => {
        const cleanJson = this.service.fixJsonString(x);
        this.clientList = JSON.parse(cleanJson);
      }),
    ).subscribe();
  }



  abrirEditar(id: string) {
    if (!id) {
      this.msg = 'Não foi encontrado ID do cliente';
      return;
    } else {
      this.msg = '';
    }
    const client : ICliente = this.clientList.find(c => c.id === id) as ICliente;
    sessionStorage.setItem('client', JSON.stringify(client));
    this.router.navigate(['cliente', id]);
  }
}
