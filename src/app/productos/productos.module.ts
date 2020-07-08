import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './../api.service';

import { ProductosPageRoutingModule } from './productos-routing.module';


import { ProductosPage } from './productos.page';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    IonicModule,
    ProductosPageRoutingModule
  ],
  declarations: [ProductosPage], 
  providers: [ApiService],
})
export class ProductosPageModule {}
