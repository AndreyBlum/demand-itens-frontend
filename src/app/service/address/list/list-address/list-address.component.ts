import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Address } from 'src/app/service/address/address';
import { Observable } from 'rxjs';
import { AddressPage } from '../../address-page';
import { AddressService } from '../../address.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './list-address.component.html',
  styleUrls: ['./list-address.component.scss']
})
export class AddressListComponent implements OnInit {

  dataSource: AddressPage = null;
  columnsTable = ['id', 'cep', 'country', 'state', 'city', 'district', 'patio', 'number'];
  pageEvent: PageEvent;


  address$: Observable<Address[]>;
  constructor(private addressService: AddressService) { }

  ngOnInit(): void {
    this.listDemands();
  }



  listDemands() {
    this.addressService.listPage(0, 5)
    .subscribe(
      (addressPage: AddressPage) => {
        this.dataSource = addressPage
      }
      )
    }
    changePage(event: PageEvent) {
      let page = event.pageIndex;
      let size = event.pageSize;

      this.addressService.listPage(page, size)
      .subscribe(
        (addressPage: AddressPage) => {
          this.dataSource = addressPage
        }
      )
    }
    public get getAllElements(): number {
      if (this.dataSource && this.dataSource.totalElements)
        return this.dataSource.totalElements;
      else
        return 1;

    }

}
