import { expect } from "chai";
import {tree} from "../xMasTree";

describe("xMasTree", () => {
    describe("height 0", () => {
        it("has 2 elements", () => {
            expect(tree(0).length).to.equal(2);
        });
        it("returns trunk only", () => {
            expect(tree(0)).to.deep.equal(["#", "#"]);
        });
    });

    describe("height 1", () => {
        it("first element is #", () => {
            expect(tree(1)[0]).to.equal("#");
        });

        it("has trunk and 1 level", () => {
            expect(tree(1)).to.deep.equal(["#", "#", "#"]);
        });
    });

    describe("height 2", () => {
        it("first element is '_#_'", () => {
            expect(tree(2)[0]).to.equal("_#_");
        });
    });
});