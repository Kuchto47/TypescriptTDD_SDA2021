import { expect } from "chai";
import {fizzBuzz} from "../fizzBuzz";

describe('FizzBuzz', () => {
    it ('should return 1 when input 1', () => {
        expect(fizzBuzz(1)).to.equal('1');
    });
    it ('should return 2 when input 2', () => {
        expect(fizzBuzz(2)).to.equal('2');
    });
    it ('should return Fizz when input 3', () => {
        expect(fizzBuzz(3)).to.equal('Fizz');
    });

    it ('should return 4 when input 4', () => {
        expect(fizzBuzz(4)).to.equal('4');
    });

    it ('should return Buzz when input 5', () => {
        expect(fizzBuzz(5)).to.equal('Buzz');
    });

    it ('should return Fizz when input 6', () => {
        expect(fizzBuzz(6)).to.equal('Fizz');
    });

    it ('should return Buzz when input 10', () => {
        expect(fizzBuzz(10)).to.equal('Buzz');
    });

    it ('should return FizzBuzz when input 15', () => {
        expect(fizzBuzz(15)).to.equal('FizzBuzz');
    });

    it ('should return FizzBuzz when input 30', () => {
        expect(fizzBuzz(30)).to.equal('FizzBuzz');
    });

})

