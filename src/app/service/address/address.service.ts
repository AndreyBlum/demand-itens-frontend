import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { Address } from './address';
import { AddressPage } from './address-page';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private type = 'address';
  private url = environment.backUrl;

  constructor(private http: HttpClient) { }

  // listAll(): Observable<PhysicalPerson[]> {
  //   return this.http.get<PhysicalPerson[]>(`${this.url}/${this.type}/all`)
  // }

  listById(id: number): Observable<Address> {
    return this.http.get<Address>(`${this.url}/${this.type}/id/${id}`);
  }

  add(address: Address): Observable<Address> {
    return this.http.post<Address>(`${this.url}/${this.type}`, address);
  }

  update(address: Address): Observable<Address> {
    return this.http.put<Address>(`${this.url}/${this.type}/${address.id}`, address);
  }

  delete(addressId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${this.type}/delete/${addressId}`);
  }
  listPage(page: number, size: number):Observable<AddressPage> {
    let params = new HttpParams();

    params = params.append('page', String(page));
    params = params.append('size', String(size));

    return this.http.get(`${this.url}/${this.type}`, {params})
    .pipe(
      map((addressPage: AddressPage): any => {
        if (addressPage && addressPage.content && addressPage.content.length)
        addressPage.content

          return addressPage;
      }),
      catchError(error =>
         throwError(error)
    ))
  }

  searchByCep(cep: number){
    this.getJSON(`https://viacep.com.br/ws/${cep}/json/`, (err, data) => {
      if (err !== null) {
        alert('Alguma coisa deu errada no searchByCep')
      } else {
        return data
      }
    })

  }

  getJSON = function(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = () => {
      const status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};
}
