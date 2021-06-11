import { Address } from "../address/address";
import { Client } from "../client/client";
import { DemandItens } from "../demandItens/demandItens";

export interface Demand {
  id: number,
  client: Client,
  address: Address,
  date: string,
  situation: string,
  totalValue: number,
  discount: number,
  demandItens: DemandItens[]
}
