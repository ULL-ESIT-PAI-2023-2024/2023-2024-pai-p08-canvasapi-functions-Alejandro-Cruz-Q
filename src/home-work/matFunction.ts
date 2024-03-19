/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Alejandro Miguel Cruz Quiralte
 * @since 18 March 2024
 *           Description:  Abstract class that represents a function in the canvas
 *                        
 *
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 *
 */

import { Axis } from './axis.js';

/**
 * Abstract class that represents a function in the canvas
 * @class
 * @abstract
 */
export abstract class MatFunction {
  private readonly scale: number = 50;
  private readonly lineWidth: number = 2;
  private readonly step: number = 1; // Steps used for precision in the representation of the function

  private ctx: CanvasRenderingContext2D;
  private width: number;
  private height: number;
  private originPoint: { x: number, y: number };

  /**
   * Create a new MatFunction
   * @param ctx The canvas context
   * @param width The width of the canvas
   * @param height The height of the canvas
   */
  constructor(axis: Axis) {
    this.ctx = axis.getContext();
    this.width = axis.getWidth();
    this.height = axis.getHeight();
    this.originPoint = axis.getOrigin();
    this.scale = axis.getScale();
  }

  /**
   * Getter for the canvas context
   * @returns void
   */
  public getContext() : CanvasRenderingContext2D{
    return this.ctx;
  }

  /**
   * Getter for the canvas width
   * @returns void
   */
  public getWidth() : number{
    return this.width;
  }

  /**
   * Getter for the canvas height
   * @returns void
   */
  public getHeight() : number{
    return this.height;
  }


  /**
   * Getter for the origin point
   * @returns void
   */
  public getOrigin(): { x: number, y: number }{
    return this.originPoint;
  }

  /**
   * Getter for the scale of the function
   * @returns void
   */
  public getScale() : number{
    return this.scale;
  }

  /**
   * Getter for the lineWidth of the function
   * @returns void
   */
  public getLineWidth() : number{
    return this.lineWidth;
  }

  /**
   * Getter for the step of the function
   * @returns void
   */
  public getStep() : number{
    return this.step;
  }

  public abstract draw(): void;
}