import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

class ClienteHTML{
  nome: string = '';
  email: string = '';
  profissao: string = '';
}

@Component({
  selector: 'app-cliente-button-salvar-regras-no-html',
  templateUrl: './cliente-button-salvar-regras-no-html.component.html',
  styleUrls: ['./cliente-button-salvar-regras-no-html.component.css']
})
export class ClienteButtonSalvarRegrasNoHtmlComponent {
 
  cliente: ClienteHTML = new ClienteHTML();
  profissoes = ['Programador', 'Empresário', 'Outro'];

  salvar(form: NgForm): void {
    this.cliente.nome = form.value.nome;
    this.cliente.email = form.value.email;
    this.cliente.profissao = form.value.profissao.length === 0 ? this.cliente.profissao : form.value.profissao;

    form.reset({ profissao: '' });
  }

}