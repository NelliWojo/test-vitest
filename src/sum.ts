export default function sum(...numbers: number[]) {
  return numbers.reduce((total, numbers) => total + numbers, 0);
}
