import IThumbnail from "./i-thumbnail";
import ICategoryId from "./i-category-id";

export default interface ICar {
  id: string;
  colors: string[];
  name: string;
  description: string;
  number: string;
  priceMax: number;
  priceMin: number;
  tank: number;
  thumbnail: IThumbnail;
  categoryId: ICategoryId;
}
