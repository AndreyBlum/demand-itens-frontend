import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { Product } from './product';
import { ProductPage } from './product-pages';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private type = 'product';
  private url = environment.backUrl;

  constructor(private http: HttpClient) { }

  // listAll(): Observable<PhysicalPerson[]> {
  //   return this.http.get<PhysicalPerson[]>(`${this.url}/${this.type}/all`)
  // }

  listById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${this.type}/id/${id}`);
  }

  add(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.url}/${this.type}`, product);
  }

  update(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.url}/${this.type}/${product.id}`, product);
  }

  delete(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${this.type}/delete/${productId}`);
  }
  listPage(page: number, size: number):Observable<ProductPage> {
    let params = new HttpParams();

    params = params.append('page', String(page));
    params = params.append('size', String(size));

    return this.http.get(`${this.url}/${this.type}`, {params})
    .pipe(
      map((productPage: ProductPage): any => {
        if (productPage && productPage.content && productPage.content.length)
        productPage.content

            .map((product: Product) => {
              if (product.status)

              product.status =
              product.status === "ACTIVE" ? "Ativo" : "Inativo";
            })
          return productPage;
      }),
      catchError(error =>
         throwError(error)
    ))
}
}
