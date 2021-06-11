import { Component, OnInit } from '@angular/core';
import { PhysicalPerson } from 'src/app/service/physical-person/physical-person'
import { PhysicalPersonService } from 'src/app/service/physical-person/physical-person.service';
import { Observable } from 'rxjs';
import { PhysicalPage } from '../../physical-person-pages';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-physical-list',
  templateUrl: './list-physical.component.html',
  styleUrls: ['./list-physical.component.scss']
})
export class ListPhysicalComponent implements OnInit {

  physicals$: Observable<PhysicalPerson[]>;
  dataSource: PhysicalPage = null
  pageEvent: PageEvent

  constructor(private physicalService: PhysicalPersonService) { }

  ngOnInit(): void {
    this.listWPage();
  }

  // list() {
  //   this.physicals$ = this.physicalService.listAll()
  // }
  listWPage(){
    this.physicalService.listPage(0,10)
    .subscribe((physicalPage: PhysicalPage) => {
      this.dataSource = physicalPage
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

  this.physicalService.listPage(page, size)
  .subscribe(
    (physicalPage: PhysicalPage) => {
      this.dataSource = physicalPage
    }
  )
}

  columnsTable = ['name', 'id', 'docType', 'cpf', 'clientCode'];

}

