import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { LegalPerson } from '../../legal-person';
import { LegalPersonService } from '../../legal-person.service';
import { LegalPage } from '../../legal-person-pages';


@Component({
  selector: 'app-legal-list',
  templateUrl: './list-legal.component.html',
  styleUrls: ['./list-legal.component.scss']
})
export class ListLegalComponent implements OnInit {

  legals$: Observable<LegalPerson[]>;
  dataSource: LegalPage = null
  pageEvent: PageEvent

  constructor(private legalService: LegalPersonService) { }

  ngOnInit(): void {
    this.listWPage();
  }

  // list() {
  //   this.physicals$ = this.physicalService.listAll()
  // }
  listWPage(){
    this.legalService.listPage(0,10)
    .subscribe((legalPage: LegalPage) => {
      this.dataSource = legalPage
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

  this.legalService.listPage(page, size)
  .subscribe(
    (legalPage: LegalPage) => {
      this.dataSource = legalPage
    }
  )
}

  columnsTable = ['name', 'id', 'docType', 'cnpj', 'clientCode'];

}

