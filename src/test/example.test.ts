import { expect } from "chai";
import { addNumbers } from "../example";

describe("addNumbers", () => {
    it("adds 1 and 0", () => {
        expect(addNumbers(1, 0)).to.equal(1);
    });

    it("adds 2 and 0", () => {
        expect(addNumbers(2, 0)).to.equal(2);
    });

    it("adds 0 and 1", () => {
        expect(addNumbers(0, 1)).to.equal(1);
    });

    it("adds 0 and 2", () => {
        expect(addNumbers(0, 2)).to.equal(2);
    });
});