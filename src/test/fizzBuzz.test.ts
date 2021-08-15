import { expect } from "chai";
import { fizzBuzz } from "../fizzBuzz";

describe("fizzBuzz", () => {
    describe("returns stringified number", () => {
        it("\"1\" when given 1", () => {
            expect(fizzBuzz(1)).to.equal("1");
        });
    
        it("\"2\" when given 2", () => {
            expect(fizzBuzz(2)).to.equal("2");
        });

        it("\"4\" when given 4", () => {
            expect(fizzBuzz(4)).to.equal("4");
        });
    });
    
    describe("returns \"Fizz\"", () => {
        let expected: string = "Fizz";
        it("when given 3", () => {
            expect(fizzBuzz(3)).to.equal(expected);
        });

        it("when given 6", () => {
            expect(fizzBuzz(6)).to.equal(expected);
        });

        it("when given 9", () => {
            expect(fizzBuzz(9)).to.equal(expected);
        });
    });

    describe("returns \"Buzz\"", () => {
        let expected: string = "Buzz";
        it("when given 5", () => {
            expect(fizzBuzz(5)).to.equal(expected);
        });

        it("when given 10", () => {
            expect(fizzBuzz(10)).to.equal(expected);
        });
    });

    describe("returns \"FizzBuzz\"", () => {
        let expected: string = "FizzBuzz";
        it("when given 15", () => {
            expect(fizzBuzz(15)).to.equal(expected);
        });

        it("when given 30", () => {
            expect(fizzBuzz(30)).to.equal(expected);
        });
    });
});