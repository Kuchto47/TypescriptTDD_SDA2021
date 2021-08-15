import { expect } from "chai";
import { fizzBuzz } from "../fizzBuzz";

describe("fizzBuzz", () => {
    it("returns \"1\" when given 1", () => {
        expect(fizzBuzz(1)).to.equal("1");
    });

    it("returns \"2\" when given 2", () => {
        expect(fizzBuzz(2)).to.equal("2");
    });
});