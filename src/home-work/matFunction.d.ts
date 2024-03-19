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
export declare abstract class MatFunction {
    private readonly scale;
    private readonly lineWidth;
    private readonly step;
    private ctx;
    private width;
    private height;
    private originPoint;
    /**
     * Create a new MatFunction
     * @param ctx The canvas context
     * @param width The width of the canvas
     * @param height The height of the canvas
     */
    constructor(axis: Axis);
    /**
     * Getter for the canvas context
     * @returns void
     */
    getContext(): CanvasRenderingContext2D;
    /**
     * Getter for the canvas width
     * @returns void
     */
    getWidth(): number;
    /**
     * Getter for the canvas height
     * @returns void
     */
    getHeight(): number;
    /**
     * Getter for the origin point
     * @returns void
     */
    getOrigin(): {
        x: number;
        y: number;
    };
    /**
     * Getter for the scale of the function
     * @returns void
     */
    getScale(): number;
    /**
     * Getter for the lineWidth of the function
     * @returns void
     */
    getLineWidth(): number;
    /**
     * Getter for the step of the function
     * @returns void
     */
    getStep(): number;
    abstract draw(): void;
}
