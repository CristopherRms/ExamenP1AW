import { Component, Input } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgClass, NgIf],
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {
  producto: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductoService
  ) { }

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(productId).subscribe((data: any) => {
      this.producto = data;
    });
}
}
