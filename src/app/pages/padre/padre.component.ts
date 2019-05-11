import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  public name;
  public matricula;
  public estudiantes = [{name: 'Armando Tapia', matricula: 45}];
  public activo = true;

  constructor() { }

  ngOnInit() {
  }

  pushAlArray() {
    let estudiante = {name: this.name, matricula: this.matricula};
    this.estudiantes.push(estudiante);
    this.activo = false;
    this.name = '';
    this.matricula = '';
  }

}
