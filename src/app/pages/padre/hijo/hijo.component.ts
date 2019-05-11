import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() estudiante: {name: string, matricula: number};

  // Desde el hijo se quiere ir un directorio hacia atras, hacie el directorio padre
  // para mandarle un dato X lo que sea
  // aparte del output se debe traer el objeto evenEmiter
  // Se puede hacer mas eficiente sabiendo que se envia
  // desde el template (html) se debe enviar, disparar el emisor
  // hay muchas formas, dentro del ngOnit
  @Output() cambio = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  cambiar() {
    // Para enviar
    this.cambio.emit('Dato emitido');
  }

}
