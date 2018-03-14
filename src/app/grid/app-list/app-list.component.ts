import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { MaterialModule } from '../../material.module'

@Component({
  selector: 'list-item-view',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent implements OnInit {

	@Output() onSelected = new EventEmitter<string>();	
	selectedProduct: string;
	products = [
	    {
	      id: 'PhotosId',
	      name: 'Photos',
	      updated: new Date('1/1/16'),
	    },
	    {
	      id: 'RecipesId',
	      name: 'Recipes',
	      updated: new Date('1/17/16'),
	    },
	    {
	      id: 'WorkId',
	      name: 'Work',
	      updated: new Date('1/28/16'),
	    }
	  ];
	
  constructor() { }

  ngOnInit() {
  }

  setSelectedProduct(productName: string) {
  	this.selectedProduct = productName;
  	this.onSelected.emit(this.selectedProduct);

  }

}
