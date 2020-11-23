export function prettifyPrice(num: number) {
  const n = num.toString();
  return n.split(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g).join(" ");
}
