import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {ApiService} from './../api.service'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  categorias: any;
  
  constructor(private menu: MenuController,private apiService: ApiService) { }
   

  ngOnInit(){
    
    this.apiService.getCategorias2().subscribe(
      (data) => { // Success
        console.log(data)
        this.categorias = data;
        console.log(data)
      },
      (error) => {
        console.error(error);
      }
    );
  }


  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  
  }
  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

}
