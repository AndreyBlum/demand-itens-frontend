import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { Product } from '../../product';
import { ProductPage } from '../../product-pages';
import { ProductService } from '../../product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  physicals$: Observable<Product[]>;
  dataSource: ProductPage = null
  pageEvent: PageEvent

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.listWPage();
  }

  // list() {
  //   this.physicals$ = this.physicalService.listAll()
  // }
  listWPage(){
    this.productService.listPage(0,10)
    .subscribe((productPage: ProductPage) => {
      this.dataSource = productPage
    })
  }
public get getAllElements(): number{
  if (this.dataSource && this.dataSource.totalElements) {
    return this.dataSource.totalElements
  } else {
    return 1;
  }
}

changePage(event: PageEvent) {
  let page = event.pageIndex;
  let size = event.pageSize;
  console.log('teste na page')

  this.productService.listPage(page, size)
  .subscribe(
    (productPage: ProductPage) => {
      this.dataSource = productPage
    }
  )
}

  columnsTable = [
   'id',
   'code',
   'description',
   'unitOfmeasurement',
   'unitaryValue',
   'totalAmount',
   'status'
    ];

}

