import { Component, OnInit } from '@angular/core';
import {ProductDataService} from '../product-data.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productData:ProductDataService) { 
    console.log(productData.data)
  }

  ngOnInit() {
  }

}
