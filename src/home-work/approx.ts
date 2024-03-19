import { MatFunction } from "./matFunction";
import { Axis } from "./axis";

export abstract class Approximation{
  private axis: Axis;
  private matFunction: MatFunction;

  /**
   * Create a new Approximation
   * @param axis The axis of the canvas
   * @param matFunction The function to approximate
   * @constructor
   */
  constructor(axis : Axis, matFunction: MatFunction){
    this.axis = axis;
    this.matFunction = matFunction;
  }

  /**
   * Calculate the aproximation of the function
   * @returns void
   */
  public abstract calculateAproximation(): void;

  /**
   * Draw the aproximation of the function
   * @returns void
   */
  public abstract drawAproximation(): void;

  /**
   * Getter for the axis
   * @returns The axis
   */
  public getAxis() : Axis {
    return this.axis;
  }

  /**
   * Getter for the matFunction
   * @returns The matFunction
   */
  public getMatFunction() : MatFunction {
    return this.matFunction;
  }



}


