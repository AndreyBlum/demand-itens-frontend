import { Demand } from "../demand/demand";

export interface PhysicalPerson {
  id: number,
  name: string,
  clientCode: string,
  docType: string,
  demands: Demand[],
  cpf: string
}
