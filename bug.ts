function add(a: number, b: number): number {
  return a + b;
}

const result = add(5, '10');
console.log(result); // This will compile but throw an error at runtime.