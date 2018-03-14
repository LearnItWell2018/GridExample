import { Component, OnInit } from '@angular/core';


import { MaterialModule } from '../material.module';

@Component({
  //selector: 'app-grid',
  selector: 'abc',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

	selectedProductOnList: string;
  	constructor() { }

	ngOnInit() {
	}

	onSelected(productName: string) {
		this.selectedProductOnList = productName;
	}

}
