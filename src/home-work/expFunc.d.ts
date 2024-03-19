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
export declare class ExpFunc extends MatFunction {
    private readonly color;
    /**
     * Create a new ExpFunc
     * @param ctx The canvas context
     * @param width The width of the canvas
     * @param height The height of the canvas
     */
    constructor(axis: Axis);
    /**
     * Draw the exp function in the axis on the canvas
     * @returns void
     */
    draw(): void;
}
