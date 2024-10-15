import { Component, Input } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { OnInit } from '@angular/core';
import { DetallesComponent } from '../detalles/detalles.component';
import { NgClass, NgIf } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,RouterLink,DetallesComponent,NgIf,NgClass],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent implements OnInit {
   constructor(private ProductoService:ProductoService){
}
ngOnInit(): void {
  this.getProducts();
}
productList:Producto[]=[];
getProducts(){
  this.ProductoService.getProductos().subscribe({
    next: (response) => {
      console.log(response);
      this.productList=response;
    },
    error: (error) => {
      console.log(error);
    },

  })
}
public selectedProduct: any = null;

  showDetails(product: any) {
    this.selectedProduct = product;
  }
}
