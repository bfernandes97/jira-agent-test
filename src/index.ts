import { Calculator } from './calculator';
import { greet } from './utils';

function main(): void {
  console.log(greet('World'));

  const calc = new Calculator();

  console.log('Addition: 5 + 3 =', calc.add(5, 3));
  console.log('Subtraction: 10 - 4 =', calc.subtract(10, 4));
  console.log('Multiplication: 6 * 7 =', calc.multiply(6, 7));
  console.log('Division: 20 / 4 =', calc.divide(20, 4));
}

main();
