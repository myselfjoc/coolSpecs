import { Component, OnInit } from '@angular/core';
import { SpecsDetailsService } from 'src/app/services/specs-details.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products: any;
  constructor(private productData: SpecsDetailsService) { 
    productData.products().subscribe((data)=>{
      this.products=data
      console.log(this.products);
      
    })
  }

  ngOnInit(): void {
  }

}
