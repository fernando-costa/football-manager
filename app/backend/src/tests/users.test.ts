import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import SequelizeUser from '../database/models/SequelizeUser';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

import {
  validLoginBody,
  emptyEmailLoginBody,
  emptyPasswordLoginBody,
  atLessEmailLoginBody,
  domainLessEmailLoginBody,
  shortPasswdLoginBody,
  inexistantUserLoginBody,
} from './mocks/users/users.mocks'

const lackingFieldMessage = { message: 'All fields must be filled' }

const invalidCredentialMessage = { message: 'Invalid email or password' }

describe('Testing Login:', () => {
  describe('should fail if', () => {
    it('email is not provided', async function() {
      const { status, body } = await chai.request(app).post('/login')
        .send(emptyEmailLoginBody);

      expect(status).to.equal(400);
      expect(body).to.be.deep.equal(lackingFieldMessage);
    });

    it('password is not provided', async function() {
      const { status, body } = await chai.request(app).post('/login')
        .send(emptyPasswordLoginBody);

      expect(status).to.equal(400);
      expect(body).to.be.deep.equal(lackingFieldMessage);
    });

    it('email lacks "at" symbol', async function() {
      const { status, body } = await chai.request(app).post('/login')
        .send(atLessEmailLoginBody);

      expect(status).to.equal(401);
      expect(body).to.be.deep.equal(invalidCredentialMessage);
    });

    it('email lacks domain', async function() {
      const { status, body } = await chai.request(app).post('/login')
        .send(domainLessEmailLoginBody);

      expect(status).to.equal(401);
      expect(body).to.be.deep.equal(invalidCredentialMessage);
    });

    it('password is shorter than 6 characters', async function() {
      const { status, body } = await chai.request(app).post('/login')
        .send(shortPasswdLoginBody);

      expect(status).to.equal(401);
      expect(body).to.be.deep.equal(invalidCredentialMessage);
    });

    it('user is non existant', async function() {
      const { status, body } = await chai.request(app).post('/login')
        .send(inexistantUserLoginBody);

      expect(status).to.equal(401);
      expect(body).to.be.deep.equal(invalidCredentialMessage);
    });

    afterEach(sinon.restore);
  });

  it('should succeed with proper credentials', async function() {
    const { status, body } = await chai.request(app).post('/login')
      .send(validLoginBody);

    expect(status).to.equal(200);
    expect(body).to.be.deep.equal({
    'token': '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO',
    });
  });

  afterEach(sinon.restore);
});
