import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  constructor() { }
  art ={
    codigo:0,
    descripcion:"",
    precio:0,
    ruta:""
  }
  Todoslosarticulos = [{codigo:1, descripcion:'lentes', precio: 560, ruta:"lentes.png"},
  {codigo:2, descripcion:'pantalon', precio: 360, ruta:"pantalon.png"},
  {codigo:3, descripcion:'sueter', precio: 580, ruta:"sueter.png"},
  {codigo:4, descripcion:'Gorrar', precio: 1200, ruta:"Gorrar.png"},
  {codigo:5, descripcion:'tennis', precio: 1560, ruta:"tennis.png"},
  ];
  hayRegistros(){
    return this.Todoslosarticulos.length>0;
  }
  ngOnInit(): void {
  }

}
