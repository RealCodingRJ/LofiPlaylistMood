export function getTime(a: number, b: number) {
  return new Date().setDate(a) - new Date().setDate(b);
}
