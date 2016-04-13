/// <reference path="../../typings/main.d.ts" />

import { expect } from 'chai';
import { app } from '../server/server';
import * as http from 'http';

describe('Placeholder', () => {
    it('Should respond with status 200', done => {
        http.get('http://127.0.0.1:' + app.get('port'), res => {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });
});
