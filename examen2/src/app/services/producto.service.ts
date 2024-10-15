import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  uAPI:string ="https://fakestoreapi.com/products";
  private _products :Producto[]= []; 
  constructor(private htppClient:HttpClient){
    
  }

  getProductos():Observable<any>{
    return this.htppClient.get(this.uAPI).pipe(res=> res);
  }
  getProductById(id: number): Observable<any> {
    return this.htppClient.get(`${this.uAPI}/${id}`);
  }
}
