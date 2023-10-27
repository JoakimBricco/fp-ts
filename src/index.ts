import { pipe } from 'fp-ts/function';
import * as O from 'fp-ts/Option';

export const functionalFunctions = (): void => {
  const inverse = (x: number): O.Option<number> => x === 0 ? O.none : O.some(1 / x)

  console.log(inverse(2));

  return;
}