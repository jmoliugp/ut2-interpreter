import { State } from '../interpreter/State';

export interface ASTNode {
  toString(): string;
  unparse(): string;
}

/**
  Categoría sintáctica de las expresiones de While, las
  construcciones del lenguaje que evalúan a un valor.
*/
export abstract class Exp implements ASTNode {

  abstract toString(): string;
  abstract unparse(): string;
  abstract evaluate(state: State): any;

  evaluateNumber(state: State): number{
    return this.evaluate(state);
  }
  evaluateBoolean(state: State): boolean{
    return this.evaluate(state);
  }


}

/**
  Categoría sintáctica de las sentencias (statements) de While, las
  construcciones del lenguaje que modifican (potencialmente) los
  valores de las variables en el estado del programa.
*/
export interface Stmt extends ASTNode {

  evaluate(state: State): State;

}
