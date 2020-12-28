import IPoint from "./i-point";
import ICar from "./i-car";
import ICity from "./i-city";

export default interface IOrder {
  color: string;
  dateFrom: Date;
  dateTo: Date;
  id: string;
  isFullTank: boolean;
  isNeedChildChair: boolean;
  isRightWheel: boolean;
  price: number;
  pointId: IPoint;
  carId: ICar;
  cityId: ICity;
}
