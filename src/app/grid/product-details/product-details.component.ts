import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

	pidSelected: string;
	@Input() productName: string;

  	constructor(
  		private route: ActivatedRoute,
	  	private location: Location) { }

	ngOnInit() {
		this.pidSelected = this.route.snapshot.paramMap.get('product-id');
	}

}
