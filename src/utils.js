export function generateRandomNumber(max=10, min=1) {
  return Math.floor(Math.random() * (max - min) + min);
}
