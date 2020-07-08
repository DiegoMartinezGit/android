import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Categorias} from './home/categorias.model';
import {Producto} from './home/producto.model';
import{HttpHeaders} from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private header = new HttpHeaders({ 'content-type': 'application/json' });
  private categorias: Categorias[]=
  [
  { "_id" : "5ec1f048635e474f1a796dd5", "name" : "Video Juegos", "ruta" : "/assets/img/categori/categoria1.jpg" },
  { "_id" : "5ec1f058635e474f1a796dd6", "name" : "Animales", "ruta" : "/assets/img/categori/categoria2.jpg" },
  { "_id" : "5ec1f063635e474f1a796dd7", "name" : "Deportes", "ruta" : "/assets/img/categori/categoria3.jpg" },
  { "_id" : "5ec1f071635e474f1a796dd8", "name" : "Instrumentos", "ruta" : "/assets/img/categori/categoria4.jpg" }
  ];
  private productos=
  [
    { "_id" : "5ec1f2ef635e474f1a796dd9", "name" : "Gato Gordo", "precio" : "0.00", "desc" : "Gato que esta gordo pero por eso se regala come mucho xd", "ruta" : "/assets/img/product/ahidisegratis.jpg", "categoria" : "5ec1f058635e474f1a796dd6" },
    { "_id" : "5ec1f388635e474f1a796dda", "name" : "Bateria", "precio" : "500", "desc" : "Instrumento de percusion que se toca con baquetas vienen incluidas y suena bonito", "ruta" : "/assets/img/product/bateria.jpg", "categoria" : "5ec1f071635e474f1a796dd8" },
    { "_id" : "5ec1f3db635e474f1a796ddb", "name" : "Death Stranding", "precio" : "10", "desc" : "Juego que es terrible raro y por mas que lo juegues no lo vas a entender", "ruta" : "/assets/img/product/deathstranding.jpg", "categoria" : "5ec1f048635e474f1a796dd5" },
    { "_id" : "5ec1f440635e474f1a796ddc", "name" : "Doge", "precio" : "100000", "desc" : "Perro de raza japonesa es de color cafe con blanco y te mira inculpandote", "ruta" : "/assets/img/product/doge.jpg", "categoria" : "5ec1f058635e474f1a796dd6" },
    { "_id" : "5ec1f48c635e474f1a796ddd", "name" : "Guitarra electrica", "precio" : "300", "desc" : "Instrumento de cuerdas, viene con uñetas y funda es de color rojo", "ruta" : "/assets/img/product/guitarra.jpg", "categoria" : "5ec1f071635e474f1a796dd8" },
    { "_id" : "5ec1f4e9635e474f1a796dde", "name" : "Pelota de Futbol Jabulani", "precio" : "50", "desc" : "Pelota de futbol, es redonda del mundial de sudafirica 2010", "ruta" : "/assets/img/product/jabulani.jpg", "categoria" : "5ec1f063635e474f1a796dd7" },
    { "_id" : "5ec1f52b635e474f1a796ddf", "name" : "Perrito Triste", "precio" : "200", "desc" : "perrito que esta triste aunque todos se rian de el es super ultifacetico y se viste de cualquier cosa", "ruta" : "/assets/img/product/perritotriste.jpg", "categoria" : "5ec1f058635e474f1a796dd6" },
    { "_id" : "5ec1f57c635e474f1a796de0", "name" : "Piano", "precio" : "1000", "desc" : "Instrumento musical es de marfil y suena super bien no se que mas poner se me acabo la creatividad", "ruta" : "/assets/img/product/piano.png", "categoria" : "5ec1f071635e474f1a796dd8" },
    { "_id" : "5ec1f5de635e474f1a796de1", "name" : "Raqueta de Tenis", "precio" : "60", "desc" : "raqueta de tenis con el mango de goma esta autografiada por el rafa nadal ", "ruta" : "/assets/img/product/tenis.jpg", "categoria" : "5ec1f063635e474f1a796dd7" },
    { "_id" : "5ec1f65a635e474f1a796de2", "name" : "The last of us", "precio" : "1000", "desc" : "juego que se demoro caleta en salir espero que sea bueno y no la caguen con la historia", "ruta" : "/assets/img/product/thelastofusII.jpg", "categoria" : "5ec1f048635e474f1a796dd5" },
    { "_id" : "5ec1f6a3635e474f1a796de3", "name" : "Half Life III", "precio" : "5000000", "desc" : "Juego que todos dicen que nunca va a salir pero aqui esta es la unica copia disonible en el mundo ", "ruta" : "/assets/img/product/Half-Life-3.jpg", "categoria" : "5ec1f048635e474f1a796dd5" },
    { "_id" : "5ec1f756635e474f1a796de4", "name" : "Pelota de Basquet", "precio" : "10", "desc" : "Pelota de basquetball jnose queamas poner", "ruta" : "/assets/img/product/pelotabasquet.jpg", "categoria" : "5ec1f063635e474f1a796dd7" }
  ];
  private ordenes=[];
  private usuarios=[];
  private carrito=[];

  constructor(protected http: HttpClient) {}

  getCategorias(){
    return [...this.categorias]

  }
  getproductoById(prodID:string){
    return this.http.get('http://ec2-34-203-236-58.compute-1.amazonaws.com:3000/productos/'+ prodID + '/')

  }
  getProductosBycat(catID: string){
    return this.http.get('http://ec2-34-203-236-58.compute-1.amazonaws.com:3000/productosCat/'+ catID +'/')
  }
  getCategorias2(){
    return this.http.get('http://ec2-34-203-236-58.compute-1.amazonaws.com:3000/categorias')
  }
  addCarrito(prodID:any,cantidad:number):void{

    
    let result=prodID;
    console.log(prodID[0]._id)
    if(localStorage.getItem('carrito')){
      this.carrito=JSON.parse(localStorage.getItem('carrito'))
    }else{
    }
    console.log(this.carrito)
    console.log(this.carrito.find(producto=>producto._id===prodID[0]._id))
    if(this.carrito.find(producto=>producto._id===prodID[0]._id)===undefined){
      
      this.carrito.push({_id:result[0]._id,name:result[0].name,precio:result[0].precio ,ruta: result[0].ruta,cantidad: cantidad});
    }else{
      let index =this.carrito.findIndex(producto =>producto._id  === prodID[0]._id);
      console.log(this.carrito[index].cantidad)
      this.carrito[index].cantidad+=cantidad;
    }
    console.log(this.carrito)
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
    console.log(JSON.parse(localStorage.getItem('carrito')))
  }

  getCarrito(){
    
    return (JSON.parse(localStorage.getItem('carrito')))

  }
  generarCompra(carrito:any,total:number){
    console.log(carrito)
    let body={
      productos:{
        carrito
      },
      total: total
    }
    localStorage.removeItem('carrito');
    return  this.http.post('http://ec2-34-203-236-58.compute-1.amazonaws.com:3000/generarCompra',body, { headers: this.header })
  }
}
