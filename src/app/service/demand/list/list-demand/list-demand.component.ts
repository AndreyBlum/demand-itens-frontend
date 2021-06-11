import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';


import { Observable } from 'rxjs';
import { Demand } from '../../demand';
import { DemandPage } from '../../demand-pages';
import { DemandService } from '../../demand.service';

@Component({
  selector: 'app-demand-list',
  templateUrl: './list-demand.component.html',
  styleUrls: ['./list-demand.component.scss']
})
export class DemandListComponent implements OnInit {

  dataSource: DemandPage = null;
  columnsTable = ['id', 'client', 'address', 'date', 'situation', 'totalValue', 'discount', 'demandItens'];
  pageEvent: PageEvent;


  demands$: Observable<Demand[]>;
  constructor(private demandService: DemandService) { }

  ngOnInit(): void {
    this.listDemands();
  }



  listDemands() {
    this.demandService.listPage(0, 5)
    .subscribe(
      (demandPage: DemandPage) => {
        this.dataSource = demandPage
      }
      )
    }
    changePage(event: PageEvent) {
      let page = event.pageIndex;
      let size = event.pageSize;

      this.demandService.listPage(page, size)
      .subscribe(
        (demandPage: DemandPage) => {
          this.dataSource = demandPage
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
