import { Approximation } from "./approx";
import { SinFunc } from "./sinFunc";
import { Axis } from "./axis";

export class SinApproximation extends Approximation {
  
  constructor(axis: Axis, matFunction: SinFunc) {
    super(axis, matFunction);
  }
  
  /**
   * Calculate the aproximation of the function
   * @returns void
   */
  public calculateAproximation() {
    
  }

  /**
   * Draw the aproximation of the function
   * @returns void
   */
  public drawAproximation() {
    
  }
}