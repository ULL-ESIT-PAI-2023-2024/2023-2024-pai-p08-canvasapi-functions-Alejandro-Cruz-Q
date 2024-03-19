/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Alejandro Miguel Cruz Quiralte
 * @since 18 March 2024
 *           Description:   Class that represents the axis in the canvas
 *                          with the meassurements and the squares
 *
 *
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 *
 */
/**
 * Class that represents the axis in the canvas
 * with the meassurements and the squares
 * @class
 */
export declare class Axis {
    private ctx;
    private width;
    private height;
    private readonly scale;
    /**
     * Create a new Axis
     * @param ctx The canvas context
     * @param width The width of the canvas
     * @param height The height of the canvas
     */
    constructor(ctx: CanvasRenderingContext2D, width: number, height: number);
    /**
     * Draw the axis in the canvas with meassurements
     * @returns void
     */
    draw(): void;
    /**
     * Draw the meassurements in the axis
     * @returns void
     */
    drawMeassurements(): void;
    /**
     * Draw the squares in the background with discontinous lines to measure in the axis
     * @returns void
     */
    drawSquareSheet(): void;
    /**
     * Getter for the canvas origin(0,0)
     * @returns
     */
    get_origin(): {
        x: number;
        y: number;
    };
    /**
     * Getter for the canvas context
     * @returns
     */
    getContext(): CanvasRenderingContext2D;
    /**
     * Getter for the canvas width
     * @returns
     */
    getWidth(): number;
    /**
     * Getter for the canvas height
     * @returns
     */
    getHeight(): number;
    /**
     * Getter for the scale of the axis
     * @returns
     */
    getScale(): number;
    prueba(): void;
}
