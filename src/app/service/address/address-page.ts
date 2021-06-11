import { Address } from "./address";

export interface AddressPage{
  content: Address[],
  totalElements: number,
  numberOfElements: number,
  pageSize: number,
  totalPages: number,
  pageNumber: number
}
