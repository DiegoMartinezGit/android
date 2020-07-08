import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './../api.service';
import { ProductoDetailPageRoutingModule } from './producto-detail-routing.module';

import { ProductoDetailPage } from './producto-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    ProductoDetailPageRoutingModule
  ],
  declarations: [ProductoDetailPage],
  providers: [ApiService],
})
export class ProductoDetailPageModule {}
