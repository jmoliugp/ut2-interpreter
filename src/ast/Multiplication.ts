import { Exp } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de multiplicaciones.
*/
export class Multiplication extends Exp {

  lhs: Exp;
  rhs: Exp;

  constructor(lhs: Exp, rhs: Exp) {
    super();
    this.lhs = lhs;
    this.rhs = rhs;
  }

  toString(): string {
    return `Multiplication(${this.lhs.toString()}, ${this.rhs.toString()})`;
  }

  unparse(): string {
    return `(${this.lhs.unparse()} * ${this.rhs.unparse()})`;
  }

  evaluate(state: State): any {
    return this.lhs.evaluateNumber(state) * this.evaluateNumber(state);
  }
}
