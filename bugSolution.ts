function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

const result1 = add(5, 10); // Works fine
const result2 = addSafe(5, 10); // Works fine

try {
  const result3 = addSafe(5, '10');
} catch (e) {
  console.error(e); // Throws error: Both arguments must be numbers
}

console.log(result1); // 15
console.log(result2); // 15