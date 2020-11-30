import IRateTypeId from "./i-rate-type-id";

export default interface IRate {
  price: number;
  rateTypeId: IRateTypeId;
}
