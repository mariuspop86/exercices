export function generateRandomNumber(max=10, min=1): number {
  return Math.floor(Math.random() * (max - min) + min);
}
