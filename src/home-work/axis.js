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
export class Axis {
    ctx;
    width;
    height;
    scale = 50;
    /**
     * Create a new Axis
     * @param ctx The canvas context
     * @param width The width of the canvas
     * @param height The height of the canvas
     */
    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
    }
    /**
     * Draw the axis in the canvas with meassurements
     * @returns void
     */
    draw() {
        this.ctx.beginPath();
        this.ctx.moveTo(this.width / 2, 0);
        this.ctx.lineTo(this.width / 2, this.height);
        this.ctx.moveTo(0, this.height / 2);
        this.ctx.lineTo(this.width, this.height / 2);
        this.ctx.stroke();
        this.drawMeassurements();
        this.drawSquareSheet();
    }
    /**
     * Draw the meassurements in the axis
     * @returns void
     */
    drawMeassurements() {
        this.ctx.font = '10px Arial';
        for (let i = this.scale; i < this.width / 2; i += this.scale) {
            let meassure = i / this.scale;
            this.ctx.fillText(meassure.toString(), this.width / 2 + i, this.height / 2 + 10);
            this.ctx.fillText(meassure.toString(), this.width / 2 - i, this.height / 2 + 10);
        }
        for (let i = 0; i < this.height / 2; i += this.scale) {
            let meassure = i / this.scale;
            this.ctx.fillText(meassure.toString(), this.width / 2 + 10, this.height / 2 - i + 10);
            this.ctx.fillText(meassure.toString(), this.width / 2 + 10, this.height / 2 + i + 10);
        }
    }
    /**
     * Draw the squares in the background with discontinuous lines to measure in the axis
     * @returns void
     */
    drawSquareSheet() {
        this.ctx.strokeStyle = 'lightgray';
        this.ctx.setLineDash([5, 10]);
        for (let i = this.scale; i < this.width / 2; i += this.scale) {
            this.ctx.beginPath();
            this.ctx.moveTo(this.width / 2 + i, 0);
            this.ctx.lineTo(this.width / 2 + i, this.height);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.moveTo(this.width / 2 - i, 0);
            this.ctx.lineTo(this.width / 2 - i, this.height);
            this.ctx.stroke();
        }
        this.ctx.setLineDash([4, 9]);
        for (let i = this.scale; i < this.height / 2; i += this.scale) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, this.height / 2 + i);
            this.ctx.lineTo(this.width, this.height / 2 + i);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.moveTo(0, this.height / 2 - i);
            this.ctx.lineTo(this.width, this.height / 2 - i);
            this.ctx.stroke();
        }
        this.ctx.setLineDash([0, 0]);
    }
    /**
     * Getter for the canvas origin(0,0)
     * @returns
     */
    getOrigin() {
        return { x: this.width / 2, y: this.height / 2 };
    }
    /**
     * Getter for the canvas context
     * @returns
     */
    getContext() {
        return this.ctx;
    }
    /**
     * Getter for the canvas width
     * @returns
     */
    getWidth() {
        return this.width;
    }
    /**
     * Getter for the canvas height
     * @returns
     */
    getHeight() {
        return this.height;
    }
    /**
     * Getter for the scale of the axis
     * @returns
     */
    getScale() {
        return this.scale;
    }
    prueba() {
        alert('prueba');
    }
}
