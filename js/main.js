/**
 * @file main module.
 * @module js/main
 * 
 * @author Kenny Carlile
 * @link https://www.kcarlile.com/
 * @link https://github.com/KCarlile
 */

// Import the say_hello function from SomeLibrary
import { say_hello } from "./lib/SomeLibrary.js";

// Set the value of the H1.greeting to the value returned by say_hello()
// when passing the value 'JavaScript'
document.getElementById('greeting').innerHTML = say_hello('JavaScript');
