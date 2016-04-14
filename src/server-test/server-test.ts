/// <reference path="../../typings/main.d.ts" />

import { expect } from 'chai';
import { app } from '../server/server';
import * as http from 'http';

describe('HTTP Status Code Is OK', () => {
    it('Should respond with status 200', done => {
        http.get('http://127.0.0.1:' + app.get('port'), res => {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });
});

describe('Landing page is served', () => {
    it('Should serve with an html mime type');
    it('Should send a complete html page');
    it('Should contain the chat mount point');
});
