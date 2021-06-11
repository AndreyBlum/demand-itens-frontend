import { HttpErrorResponse } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { PhysicalPersonService } from './service/physical-person/physical-person.service';
import { PhysicalPerson } from './service/physical-person/physical-person';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  physicals: PhysicalPerson[];

  constructor(){}

  ngOnInit() {
  }
}
