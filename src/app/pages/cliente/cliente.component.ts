import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { ICliente } from 'src/app/shared/interface/cliente.interface';
import { ClienteService } from 'src/app/shared/services/cliente.service';
import { LoaderService } from 'src/app/shared/services/loader.services';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {


  function: 'novo' | 'editar' = 'novo';
  id: string = '';
  msg: string = '';
  form = new FormGroup({
    name: new FormControl('', Validators.required ),
    cnpj: new FormControl('', Validators.required),
    status: new FormControl('Ativo'),
});

  constructor(
    private service: ClienteService,
    private router: Router,
    private route: ActivatedRoute,
    public loaderService: LoaderService
  ) { }

  ngOnInit() {
    this.route.params.subscribe( (p: any) => {
      console.log(p);
      if (!p.id) {
        this.function = 'novo';
        this.form.reset;
        return;
      } else if (p.id.length > 0) {
        this.function = 'editar';
        this.service.buscarClientes().pipe(
          tap((x: string) => {
            this.function = 'editar';
            const clientList = JSON.parse(this.service.fixJsonString(x));
            const client: ICliente = clientList.find((x: ICliente) => x.id == p.id);
            if (!client) {
              this.clientNotFound();
              return;
            }
            this.form.patchValue(client);
          }),
        ).subscribe();
        return;
      }
    })
  }

  onSubmit() {
    if (!this.form.valid) {
      this.msg = 'Formulário inválido';
      return
    }
    this.msg = '';
    if (this.function === 'novo') {
      this.service.cadastrarCliente(this.form.value);
      this.resetForm();
    } else {
      this.service.editarCliente(this.form.value);
    }
  }

  clientNotFound() {
    this.router.navigate(['404']);
  }

  resetForm() {
    this.form.reset();
    this.form.get('status')?.setValue('Ativo');
  }
}


