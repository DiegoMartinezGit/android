import { Component, OnInit } from '@angular/core';
import {ApiService} from './../api.service';
import {ActivatedRoute} from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  carrito:[];
  respuesta:any;
  productos: any;
  items:any;
  total=0;

  constructor(private apiService: ApiService,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit() {
    
    
    if(localStorage.getItem('carrito')){
    console.log(JSON.parse(localStorage.getItem('carrito')))
    this.carrito=JSON.parse(localStorage.getItem('carrito'));
    this.carrito.forEach(element => {
      this.total=this.total+ (element['cantidad']*element['precio']);
    });
    }else{
    
    }
   
    
  }
  generarcompra(){
    if(this.carrito===[]){
      console.log("xdxdxdxdxd")
    }else{
      console.log("holaaaa")
      this.apiService.generarCompra(this.carrito,this.total).subscribe(
        (data) => { // Success
          console.log(data)
          this.respuesta = data;
          console.log(this.respuesta)
          localStorage.removeItem('carrito');
        },
        (error) => {
          console.error(error);
        }
      );
      
    }
    console.log("fuera")
    
  
  }
}
