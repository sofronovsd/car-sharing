import IRateTypeId from "./i-rate-type-id";

export default interface IRate {
  id: string;
  price: number;
  rateTypeId: IRateTypeId;
}
