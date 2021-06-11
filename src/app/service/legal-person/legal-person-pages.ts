import { LegalPerson } from "./legal-person";

export interface LegalPage{
  content: LegalPerson[],
  totalElements: number,
  numberOfElements: number,
  pageSize: number,
  totalPages: number,
  pageNumber: number
}
