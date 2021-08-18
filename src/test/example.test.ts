import { expect } from "chai";
import { addNumbers } from "../example";

describe("addNumbers", () => {
    it("adds positive number and zero", () => {
        expect(addNumbers(1, 0)).to.equal(1);
    });
});