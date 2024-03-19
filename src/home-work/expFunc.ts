/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Alejandro Miguel Cruz Quiralte
 * @since 18 March 2024
 *           Description: Class that represents the exp function in the canvas
 *                       
 *
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 *
 */

import { MatFunction } from "./matFunction.js";
import { Axis } from "./axis.js";

/**
 * Class that represents the exp function in the canvas
 * @class
 */
export class ExpFunc extends MatFunction {
  private readonly color: string = 'blue';
  
  /**
   * Create a new ExpFunc
   * @param ctx The canvas context
   * @param width The width of the canvas
   * @param height The height of the canvas
   */
  constructor(axis : Axis) {
    super(axis);
  }

  /**
   * Draw the exp function in the axis on the canvas
   * @returns void
   */
  public draw() {
    this.getContext().beginPath();
    this.getContext().strokeStyle = this.color;
    this.getContext().lineWidth = this.getLineWidth();
    const { x, y } = this.getOrigin();
    // this.getContext().moveTo(x, y);

    // we define the start and end of the function
    const startX = -this.getWidth() / 2;
    const endX = this.getWidth() / 2;
    const step = this.getStep();

    // we draw the function between the start and end
    for (let i = startX; i < endX; i += step) {
      this.getContext().lineTo(x + i, y - Math.exp(i / this.getScale()) * this.getScale());
    }
    
    // we draw the function
    this.getContext().stroke();
  }
}