import { Component } from '@angular/core';

@Component({
  selector: 'app-cliente-twoway-databiding',
  templateUrl: './cliente-twoway-databiding.component.html',
  styleUrls: ['./cliente-twoway-databiding.component.css']
})
export class ClienteTwowayDatabidingComponent {

  cliente = new Cliente();
  profissoes = ['Programador', 'Empresário', 'Outro'];

}

class Cliente{
  nome = '';
  email = '';
  profissao = '';
}