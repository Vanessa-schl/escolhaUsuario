import { Component } from '@angular/core';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent {
  // Crie uma aplicação com perguntas em passos, aonde o usuário pode escolher a cor da fonte, o tamanho dela, 
 // quanto de espaço de margin e padding cada fonte vai ter e também as cores do Site, depois crie um site simples de 
 // sua preferencia consumindo as cores que foram escolhidas pelo usuário

 fontColor = '#000000';
 fontSize = 16;
 padding = 8;
 margin = 16;
 primaryColor = '#3f51b5';
 secondaryColor = '#e91e63';

 updateColors() {
   console.log(this.primaryColor, this.secondaryColor, this.fontColor, this.fontSize, this.padding, this.margin);
   document.documentElement.style.setProperty('--primary-color', this.primaryColor);
   document.documentElement.style.setProperty('--secondary-color', this.secondaryColor);
   document.documentElement.style.setProperty('--font-color', this.fontColor);
   document.documentElement.style.setProperty('--font-size', this.fontSize + 'px');
   document.documentElement.style.setProperty('--padding', this.padding + 'px');
   document.documentElement.style.setProperty('--margin', this.margin + 'px');
 }
}


