import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PhysicalPerson } from './physical-person';
import { PhysicalPage } from './physical-person-pages';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhysicalPersonService {

  private type = 'physical';
  private url = environment.backUrl;

  constructor(private http: HttpClient) { }

  // listAll(): Observable<PhysicalPerson[]> {
  //   return this.http.get<PhysicalPerson[]>(`${this.url}/${this.type}/all`)
  // }

  listById(id: number): Observable<PhysicalPerson> {
    return this.http.get<PhysicalPerson>(`${this.url}/${this.type}/id/${id}`);
  }

  add(physicalPerson: PhysicalPerson): Observable<PhysicalPerson> {
    return this.http.post<PhysicalPerson>(`${this.url}/${this.type}`, physicalPerson);
  }

  update(physicalPerson: PhysicalPerson): Observable<PhysicalPerson> {
    return this.http.put<PhysicalPerson>(`${this.url}/${this.type}/${physicalPerson.id}`, physicalPerson);
  }

  delete(physicalPersonId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${this.type}/delete/${physicalPersonId}`);
  }
  listPage(page: number, size: number):Observable<PhysicalPage> {
    let params = new HttpParams();

    params = params.append('page', String(page));
    params = params.append('size', String(size));

    return this.http.get(`${this.url}/${this.type}`, {params})
    .pipe(
      map((physicalPage: PhysicalPage): any => {
        if (physicalPage && physicalPage.content && physicalPage.content.length)
          physicalPage.content

            .map((physicalPerson: PhysicalPerson) => {
              if (physicalPerson.docType)

                physicalPerson.docType =
                physicalPerson.docType === "PHYSICAL" ? "Físico" : "Jurídico";
            })
          return physicalPage;
      }),
      catchError(error =>
         throwError(error)
    ))
}
}
