import { OptionsObject } from "@gforge/react-typeahead-ts";
import ICityId from "./i-city-id";

export default interface IPoint extends OptionsObject {
  id: string;
  name: string;
  address: string;
  cityId: ICityId;
}
