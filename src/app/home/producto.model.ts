export interface Producto{
    _id: string;
    name: string;
    precio: string;
    desc:string;
    ruta: string;
    categoria: string;  
}
export interface Carrito{
    productos: {
        producto: Producto;
        cantidad: number;
    }    
    total:number 

}