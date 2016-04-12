/// <reference path="../../typings/main.d.ts" />

import { expect } from 'chai';
import { Placeholder } from "../server/server";

describe('Placeholder', () => {
    it('Should do something');
    it('Should do something else too', () => {
        let placeholder = new Placeholder();
        expect(placeholder.doSomethingElse(2)).to.equal(4);
    });
});
