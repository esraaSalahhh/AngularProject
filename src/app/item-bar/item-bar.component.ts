import { Component, Input, OnInit } from '@angular/core';
import {Product} from '../_model/product'
@Component({
  selector: 'app-item-bar',
  templateUrl: './item-bar.component.html',
  styleUrls: ['./item-bar.component.scss']
})
export class ItemBarComponent implements OnInit {
@Input() product:Product;
  constructor() { }

  ngOnInit(): void {
  }

}
