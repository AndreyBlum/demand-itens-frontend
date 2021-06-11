import { PhysicalPerson } from "./physical-person";

export interface PhysicalPage{
  content: PhysicalPerson[],
  totalElements: number,
  numberOfElements: number,
  pageSize: number,
  totalPages: number,
  pageNumber: number
}
