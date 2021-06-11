import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { DemandItensPage } from './demandItensPage';
import { DemandItens } from './demandItens';


@Injectable({
  providedIn: 'root'
})
export class DemandItensService {

  private type = 'demandItens';
  private url = environment.backUrl;

  constructor(private http: HttpClient) { }

  // listAll(): Observable<PhysicalPerson[]> {
  //   return this.http.get<PhysicalPerson[]>(`${this.url}/${this.type}/all`)
  // }

  listById(id: number): Observable<DemandItens> {
    return this.http.get<DemandItens>(`${this.url}/${this.type}/id/${id}`);
  }

  add(demandItens: DemandItens): Observable<DemandItens> {
    console.log(demandItens.id)
    return this.http.post<DemandItens>(`${this.url}/${this.type}`, demandItens);
  }

  update(demandItens: DemandItens): Observable<DemandItens> {
    return this.http.put<DemandItens>(`${this.url}/${this.type}/${demandItens.id}`, demandItens);
  }

  delete(demandItensId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${this.type}/delete/${demandItensId}`);
  }
  listPage(page: number, size: number):Observable<DemandItensPage> {
    let params = new HttpParams();

    params = params.append('page', String(page));
    params = params.append('size', String(size));

    return this.http.get(`${this.url}/${this.type}`, {params})
    .pipe(
      map((demandPage: DemandItensPage): any => {
        if (demandPage && demandPage.content && demandPage.content.length)
        demandPage.content

          return demandPage;
      }),
      catchError(error =>
         throwError(error)
    ))
}
}
