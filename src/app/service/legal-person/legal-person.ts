import { Demand } from "../demand/demand";

export interface LegalPerson {
  id: number,
  name: string,
  clientCode: string,
  docType: string,
  demands: Demand[],
  cnpj: string
}
