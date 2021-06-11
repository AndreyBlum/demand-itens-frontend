import { Demand } from "../demand/demand";

export interface Client {
  id: number,
  name: string,
  clientCode: string,
  docType: string,
  demands: Demand[],
}
