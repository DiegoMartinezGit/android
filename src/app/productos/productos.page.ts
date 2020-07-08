import { Component, OnInit } from '@angular/core';
import {ApiService} from './../api.service';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  productos: any;
  
  
  constructor(private apiService: ApiService,private ActivatedRoute:ActivatedRoute) { 
    
   
  }

  ngOnInit() {
    this.apiService.getProductosBycat(this.ActivatedRoute.snapshot.params["cat_id"]).subscribe(
      (data) => { // Success
        console.log(data)
        this.productos = data;
        console.log(data)
      },
      (error) => {
        console.error(error);
      }
    );
    
    
  }

}
