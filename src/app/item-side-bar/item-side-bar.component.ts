import { Component, Input, OnInit } from '@angular/core';
import {Product} from '../_model/product'
@Component({
  selector: 'app-item-side-bar',
  templateUrl: './item-side-bar.component.html',
  styleUrls: ['./item-side-bar.component.scss']
})
export class ItemSideBarComponent implements OnInit {
@Input() product:Product;
  constructor() { }

  ngOnInit(): void {
  }

}
