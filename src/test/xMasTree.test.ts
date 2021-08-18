import { expect } from "chai";
import {tree} from "../xMasTree";

describe('xMastreeTest', () => {
    it('should return ["#", "#"] when input is 0', () => {
        expect(tree(0)).to.deep.equal(['#', '#']);
    })

    it('should draw tree when input is 1', () => {
        expect(tree(1)).to.deep.equal(['#', '#', '#']);
    })

    it('should draw tree when input is 2', () => {
        expect(tree(2)).to.deep.equal(['_#_', '###', '_#_', '_#_']);
    })

    it('should draw tree when input is 3', () => {
        expect(tree(3)).to.deep.equal(['__#__', '_###_', '#####', '__#__', '__#__']);
    })

    it('should draw tree when input is 4', () => {
        expect(tree(4)).to.deep.equal(['___#___', '__###__', '_#####_','#######', '___#___', '___#___']);
    })
})
