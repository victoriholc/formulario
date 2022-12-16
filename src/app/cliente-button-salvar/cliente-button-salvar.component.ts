import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

class Cliente{
  nome: string = '';
  email: string = '';
  profissao: string = '';
}

@Component({
  selector: 'app-cliente-button-salvar',
  templateUrl: './cliente-button-salvar.component.html',
  styleUrls: ['./cliente-button-salvar.component.css']
})
export class ClienteButtonSalvarComponent implements AfterViewInit {

  hasInited = false;
  hasSubmited = false;
 
  cliente: Cliente = new Cliente();
  profissoes = ['Programador', 'Empresário', 'Outro'];

  @ViewChild('inputNomeModel', { read: NgModel, static: false })
  inputNomeModel!: NgModel;
  @ViewChild('inputEmailModel', { read: NgModel, static: false })
  inputEmailModel!: NgModel;
  @ViewChild('selectProfissaoModel', { read: NgModel, static: false })
  selectProfissaoModel!: NgModel;

  salvar(form: NgForm): void {
    if (this.isFormValid()){
      this.cliente.nome = form.value.nome;
      this.cliente.email = form.value.email;
      this.cliente.profissao = form.value.profissao.length === 0 ? this.cliente.profissao : form.value.profissao;

      this.hasSubmited = false;
      form.reset();
    } else {
      this.hasSubmited = true;
    }
  }

  ngAfterViewInit(): void {
    this.hasInited = true;
  }

  isFormValid(): boolean{
    // console.log('!this.getIsInputNomeValid(): ', !this.getIsInputNomeValid())
    // console.log('!this.getIsInputNomeLengthValid(): ', !this.getIsInputNomeLengthValid())
    // console.log('!this.getIsInputEmailValid(): ', !this.getIsInputEmailValid())
    // console.log('!this.getIsSelectProfissaoValid(): ', !this.getIsSelectProfissaoValid())
    // console.log('toReturn: ', !this.getIsInputNomeValid() &&
    // !this.getIsInputNomeLengthValid() &&
    // !this.getIsInputEmailValid() &&
    // !this.getIsSelectProfissaoValid())
    // console.log('\n');
    
    return !this.getIsInputNomeValid() &&
      !this.getIsInputNomeLengthValid() &&
      !this.getIsInputEmailValid() &&
      !this.getIsSelectProfissaoValid();
  }

  getHasSubmited(): boolean{
    return this.hasSubmited;
  }

  getIsInputNomeValid(): boolean{
    // return (this.inputNomeModel ? this.inputNomeModel.hasError('required') : false) && (this.inputNomeModel.touched ?? false) && (this.inputNomeModel.pristine ?? false);

    if (this.hasInited && this.inputNomeModel && this.inputNomeModel.value){
      return this.inputNomeModel.hasError('required') && this.inputNomeModel.value.length < 1;
    }

    return false;
  }

  getIsInputNomeLengthValid(): boolean{
    // return (this.inputNomeModel ? this.inputNomeModel.hasError('minlength') : false) && (this.inputNomeModel.touched ?? false) && (this.inputNomeModel.dirty ?? false);

    if (this.hasInited && this.inputNomeModel){
      return this.inputNomeModel.hasError('minlength');
    }

    return false;
  }

  getIsInputEmailValid(): boolean{
    // return (this.inputEmailModel?.valid ?? false) && (this.inputEmailModel?.touched ?? false) && (this.inputEmailModel?.dirty ?? false);

    if (this.hasInited && this.inputEmailModel){
      const value: string = this.inputEmailModel.value ? this.inputEmailModel.value : '';
      if (value.length > 0){
        return this.inputEmailModel.hasError('email') && value.length > 0;
      } else {
        return this.inputEmailModel.hasError('required') && value.length < 1;
      }
    }

    return false;
  }

  getIsSelectProfissaoValid(): boolean{
    // return (this.selectProfissaoModel ? this.selectProfissaoModel?.value?.length === 0 : false) && (this.selectProfissaoModel?.touched ?? false) && (this.selectProfissaoModel?.pristine ?? false);
    
    if (this.hasInited && this.selectProfissaoModel){
      const value: string = this.selectProfissaoModel.value ? this.selectProfissaoModel.value : '';
      return value.length < 1;
    }

    return false;
  }

  showAlertError(): boolean{
    if (this.hasSubmited){
      return this.isFormValid() === false ? true : false;
    }
    return false;
  }

  // showAlertSuccessTest(): boolean{
    // const isClienteNull = ((this.cliente.email && this.cliente.nome && this.cliente.profissao) ?? false) ? true : false;
  //   const isClienteNull = 
  //   (this.cliente.email?.length < 1 || this.cliente.email == null) || (this.cliente.nome?.length < 1 || this.cliente.nome == null) || (this.cliente.profissao?.length < 1 || this.cliente.profissao == null);
  //   console.log('(this.cliente.email?.length < 1 || this.cliente.email == null) || (this.cliente.nome?.length < 1 || this.cliente.nome == null) || (this.cliente.profissao?.length < 1 || this.cliente.profissao == null)', 
  //   (this.cliente.email?.length < 1 || this.cliente.email == null) || (this.cliente.nome?.length < 1 || this.cliente.nome == null) || (this.cliente.profissao?.length < 1 || this.cliente.profissao == null));
  //   console.log('this.hasSubmited', this.hasSubmited)
  //   console.log('isClienteNull', isClienteNull)
  //   console.log('result', isClienteNull ? false : true)
  //   console.log('\n')
  //   if (this.hasSubmited){
  //     return isClienteNull ? false : true;
  //   }
  //   return false;
  // }

  showAlertSuccess(): boolean{
    if (this.hasSubmited){
      return this.isFormValid() === true ? true : false;
    }
    return false;
  }

  setHasSubmited(){
    this.hasSubmited = this.isFormValid();
  }

}