import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  data=new Map();

  constructor() { 
    this.data.set(1,"Product 1");
    this.data.set(2,"Product 2");
    this.data.set(3,"Product 3");
  }
  getDataOfProduct(id:number){
    return this.data.get(id)
  }

}
