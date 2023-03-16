export function zipperScroll(scroll: number): number {
  const start = 0;
  const end = 1050;
  const ratio = (scroll - start) / (end - start);
  const value = ratio > 1 ? 1.05 : ratio < 0 ? 0 : ratio;

  return value;
}
