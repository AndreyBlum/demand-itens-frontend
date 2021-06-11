import { Demand } from "./demand";

export interface DemandPage{
  content: Demand[],
  totalElements: number,
  numberOfElements: number,
  pageSize: number,
  totalPages: number,
  pageNumber: number
}
