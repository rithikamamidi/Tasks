import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ProductDataService} from '../product-data.service'
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id:number;
  productName:string;

  constructor(private route:ActivatedRoute, private productData:ProductDataService) { }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('id'))
    this.id=parseInt(this.route.snapshot.paramMap.get('id'))
    console.log(this.id)
    
     this.productName=this.productData.getDataOfProduct(this.id)
    console.log(this.productName)

  }

}
