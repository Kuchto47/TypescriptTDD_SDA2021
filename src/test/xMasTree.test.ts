import { expect } from "chai";
import {tree} from "../xMasTree";

describe("xMasTree", () => {
    describe("height 0", () => {
        it("returns trunk only", () => {
            expect(tree(0)).to.deep.equal(["#", "#"]);
        });
    });
});