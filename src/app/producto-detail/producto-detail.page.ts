import { Component, OnInit } from '@angular/core';
import {ApiService} from './../api.service';
import {ActivatedRoute} from '@angular/router';
import { Producto, Carrito } from '../home/producto.model';

@Component({
  selector: 'app-producto-detail',
  templateUrl: './producto-detail.page.html',
  styleUrls: ['./producto-detail.page.scss'],
})
export class ProductoDetailPage implements OnInit {
  carrito: any;
  producto: any;
  cantidad: number=1;
  precio: number;
  constructor(private apiService: ApiService,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.apiService.getproductoById(this.ActivatedRoute.snapshot.params["prod_id"]).subscribe(
      (data) => { // Success
        console.log(data)
        this.producto = data;
        this.precio=this.producto[0].precio
      },
      (error) => {
        console.error(error);
      }
    );
  

  }

  sumaruno() : void{
    this.cantidad=this.cantidad+1;
  };
  restaruno() : void{
    if(this.cantidad<=1){
      
    }else{
      this.cantidad=this.cantidad-1;
    }
    
  };
  agregar(){
    this.apiService.addCarrito(this.producto,this.cantidad);
    
  }


    

  

}
