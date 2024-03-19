/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Alejandro Miguel Cruz Quiralte
 * @since 18 March 2024
 *           Description: Main function that draws the axis and the functions in the canvas
 *
 *
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 *
 */
import { Axis } from './axis.js';
import { SinFunc } from './sinFunc.js';
/**
 * Main function
 * @returns void
 */
export function main() {
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    canvas.width = window.innerWidth - 100;
    canvas.height = window.innerHeight - 100;
    const axis = new Axis(context, canvas.width, canvas.height);
    axis.draw();
    const sinFunc = new SinFunc(axis);
    sinFunc.draw();
    // const expFunc = new ExpFunc(axis);
    // expFunc.draw();
    // const sqrtFunc = new SqrtFunc(axis);
    // sqrtFunc.draw();
    // const linealFunc = new LinealFunc(axis);
    // linealFunc.draw();
}
