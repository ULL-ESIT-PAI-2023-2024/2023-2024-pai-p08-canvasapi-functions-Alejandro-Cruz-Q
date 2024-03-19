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
/**
 * Abstract class that represents a function in the canvas
 * @class
 * @abstract
 */
export class MatFunction {
    scale = 50;
    lineWidth = 2;
    step = 1; // Steps used for precision in the representation of the function
    ctx;
    width;
    height;
    originPoint;
    /**
     * Create a new MatFunction
     * @param ctx The canvas context
     * @param width The width of the canvas
     * @param height The height of the canvas
     */
    constructor(axis) {
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
    getContext() {
        return this.ctx;
    }
    /**
     * Getter for the canvas width
     * @returns void
     */
    getWidth() {
        return this.width;
    }
    /**
     * Getter for the canvas height
     * @returns void
     */
    getHeight() {
        return this.height;
    }
    /**
     * Getter for the origin point
     * @returns void
     */
    getOrigin() {
        return this.originPoint;
    }
    /**
     * Getter for the scale of the function
     * @returns void
     */
    getScale() {
        return this.scale;
    }
    /**
     * Getter for the lineWidth of the function
     * @returns void
     */
    getLineWidth() {
        return this.lineWidth;
    }
    /**
     * Getter for the step of the function
     * @returns void
     */
    getStep() {
        return this.step;
    }
}
