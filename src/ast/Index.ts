import { Exp } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de las indizaciones de un literal de texto.
*/
export class Index extends Exp {

  expStr: Exp;
  expIndex: Exp;

  constructor(expStr: Exp, expIndex: Exp) {
    super();
    this.expStr = expStr;
    this.expIndex = expIndex;
  }

  toString(): string {
    return `Index(${this.expStr},${this.expIndex})`;
  }

  unparse(): string {
    return `(${this.expStr.unparse()}[${this.expIndex.unparse()}])`;
  }

  evaluate(state: State): any {
    return this.expStr.evaluate(state)[this.expIndex.evaluate(state)];
  }
}
