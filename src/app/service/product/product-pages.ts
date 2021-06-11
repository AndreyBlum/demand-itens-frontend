import { Product } from "./product";


export interface ProductPage{
  content: Product[],
  totalElements: number,
  numberOfElements: number,
  pageSize: number,
  totalPages: number,
  pageNumber: number
}
