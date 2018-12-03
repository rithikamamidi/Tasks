import { Component } from '@angular/core';
import {MenuItemsService} from './menu-items.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services';
  constructor(private menuItemService: MenuItemsService) {
    console.log(this.menuItemService.get())
  }

  ngOnInit() {
    console.log(this.menuItemService.get())
  }
}
