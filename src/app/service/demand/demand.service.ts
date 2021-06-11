import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { Demand } from './demand';
import { DemandPage } from './demand-pages';

@Injectable({
  providedIn: 'root'
})
export class DemandService {

  private type = 'demand';
  private url = environment.backUrl;

  constructor(private http: HttpClient) { }

  // listAll(): Observable<PhysicalPerson[]> {
  //   return this.http.get<PhysicalPerson[]>(`${this.url}/${this.type}/all`)
  // }

  listById(id: number): Observable<Demand> {
    return this.http.get<Demand>(`${this.url}/${this.type}/id/${id}`);
  }

  add(demand: Demand): Observable<Demand> {
    console.log(demand.id)
    return this.http.post<Demand>(`${this.url}/${this.type}`, demand);
  }

  update(demand: Demand): Observable<Demand> {
    return this.http.put<Demand>(`${this.url}/${this.type}/${demand.id}`, demand);
  }

  delete(demandId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${this.type}/delete/${demandId}`);
  }
  listPage(page: number, size: number):Observable<DemandPage> {
    let params = new HttpParams();

    params = params.append('page', String(page));
    params = params.append('size', String(size));

    return this.http.get(`${this.url}/${this.type}`, {params})
    .pipe(
      map((demandPage: DemandPage): any => {
        if (demandPage && demandPage.content && demandPage.content.length)
        demandPage.content

            .map((demand: Demand) => {
              if (demand.situation)

              demand.situation =
              demand.situation === "OPEN" ? "Aberto" : "Fechado";
            })
          return demandPage;
      }),
      catchError(error =>
         throwError(error)
    ))
}
}
