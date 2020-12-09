import Fuzzy from "fuzzy";

export function prettifyPrice(num: number) {
  const n = num.toString();
  return n.split(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g).join(" ");
}

export function customFilter(value: string, options: any[]) {
  if (value.length < 2) return [];
  const values = options.map((option) => option.name);
  const results = Fuzzy.filter(value, values).map((result) => result.string);
  return options.filter((option) => results.includes(option.name));
}
