import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { LegalPerson } from './legal-person';
import { LegalPage } from './legal-person-pages';

@Injectable({
  providedIn: 'root'
})
export class LegalPersonService {

  private type = 'legal';
  private url = environment.backUrl;

  constructor(private http: HttpClient) { }

  // listAll(): Observable<PhysicalPerson[]> {
  //   return this.http.get<PhysicalPerson[]>(`${this.url}/${this.type}/all`)
  // }

  listById(id: number): Observable<LegalPerson> {
    return this.http.get<LegalPerson>(`${this.url}/${this.type}/id/${id}`);
  }

  add(physicalPerson: LegalPerson): Observable<LegalPerson> {
    return this.http.post<LegalPerson>(`${this.url}/${this.type}`, physicalPerson);
  }

  update(physicalPerson: LegalPerson): Observable<LegalPerson> {
    return this.http.put<LegalPerson>(`${this.url}/${this.type}/${physicalPerson.id}`, physicalPerson);
  }

  delete(physicalPersonId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${this.type}/delete/${physicalPersonId}`);
  }
  listPage(page: number, size: number):Observable<LegalPage> {
    let params = new HttpParams();

    params = params.append('page', String(page));
    params = params.append('size', String(size));

    return this.http.get(`${this.url}/${this.type}`, {params})
    .pipe(
      map((physicalPage: LegalPage): any => {
        if (physicalPage && physicalPage.content && physicalPage.content.length)
          physicalPage.content

            .map((physicalPerson: LegalPerson) => {
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
