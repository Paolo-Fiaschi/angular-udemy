import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myAngular1';
  nome: string;
  studente: {
    nome: string,
    eta: number,
    presente: boolean
  }
  change(): void {
    if (this.studente.presente) {
      this.studente.presente = false;
    }else{
      this.studente.presente = true;
    }
  }


  constructor(){
    // setTimeout(() => {
    //   this.nome = 'Paolo';
    // }, 2000)
    this.studente = {
      nome: 'Paolo',
      eta: 32,
      presente: true
    }
  }
}
