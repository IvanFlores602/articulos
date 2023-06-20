import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { ArticulosComponent } from './articulos/articulos.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  art ={
    codigo:0,
    descripcion:"",
    precio:0,
    ruta:""
  }
  articulos = [{codigo:1, descripcion:'lentes', precio: 560, ruta:"lentes.png"},
  {codigo:2, descripcion:'pantalon', precio: 360, ruta:"pantalon.png"},
  {codigo:3, descripcion:'sueter', precio: 580, ruta:"sueter.png"},
  {codigo:4, descripcion:'Gorrar', precio: 1200, ruta:"Gorrar.png"},
  {codigo:5, descripcion:'tennis', precio: 1560, ruta:"tennis.png"},
  ];

  hayRegistros(){
    return this.articulos.length>0;
  }
  borrar(codigo:number){
    var ConfirmarBorrar=confirm(" Este articulo se borrará");
    if(ConfirmarBorrar == true){
        for(let x=0; x<this.articulos.length; x++)
        if(this.articulos[x].codigo==codigo){
          this.articulos.splice(x,1);
          return;
        }
    }
    }

    agregar(){
      if(this.art.codigo==0){
        alert('Debe de ingresar uncodigo distinto a cero');
        return;
      }
      for(let x=0; x<this.articulos.length; x++)
      if(this.articulos[x].codigo== this.art.codigo){
        alert(' Ya se registro un articulo con el mismo codigo')
        return;
      }
      this.articulos.push({codigo:this.art.codigo,
                          descripcion: this.art.descripcion,
                          precio:this.art.precio,
                          ruta:this.art.ruta
      });
      this.art.codigo=0;
      this.art.descripcion='';
      this.art.precio=0;
    }

    seleccionar(art:{codigo: number; descripcion: string; precio:number;}){
      this.art.codigo=art.codigo;
      this.art.descripcion= art.descripcion;
      this.art.precio=art.precio;
    }

    modificar(){
      for(let x=0; x<this.articulos.length; x++)
      if(this.articulos[x].codigo==this.art.codigo){
        this.articulos[x].descripcion = this.art.descripcion;
        this.articulos[x].precio = this.art.precio;
        return;
      }
      alert('No existe el codigo del articulo existente')
    }

    
}
