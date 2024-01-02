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
  users,
  validLoginBody,
  emptyEmailLoginBody,
  emptyPasswordLoginBody,
  atLessEmailLoginBody,
  domainLessEmailLoginBody,
  shortPasswdLoginBody,
  inexistantUserLoginBody,
} from './mocks/users/users.mocks'
import { IUser } from '../Interfaces/User/IUser';
import JWT from '../utils/JWT';
import { validateToken } from '../middlewares/loginValidation';
import UserService from '../service/LoginService';

const lackingFieldMessage = { message: 'All fields must be filled' }

const invalidCredentialMessage = { message: 'Invalid email or password' }

    const expectedToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAdXNlci5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTcwMzYyNzk0MCwiZXhwIjoxNzA0NDkxOTQwfQ.QuyV9VNG7FgKrohj2iW0KS5Ljg-SvDqqOMtBLq46VDI';

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
      sinon.stub(SequelizeUser, 'findOne').resolves(null);
      const { status, body } = await chai.request(app).post('/login')
        .send(inexistantUserLoginBody);

      expect(status).to.equal(401);
      expect(body).to.be.deep.equal(invalidCredentialMessage);
    });

    afterEach(sinon.restore);
  });

  it('should succeed with proper credentials', async function() {
    sinon.stub(SequelizeUser, 'findOne').resolves(users[1] as any);
    sinon.stub(JWT, 'sign').returns(expectedToken)
    const { status, body } = await chai.request(app).post('/login')
      .send(validLoginBody);

    expect(status).to.equal(200);
    expect(body).to.be.deep.equal({ token: 
    expectedToken })
  });

  afterEach(sinon.restore);
});

// describe('Testing Token:', () => {
//   it('should get user role with proper token', async function() {
//     sinon.stub(SequelizeUser, 'create').resolves(users[1] as any);
//     sinon.stub(SequelizeUser, 'findOne').resolves(null);
//     sinon.stub(JWT, 'verify').resolves();
//     sinon.stub(validateToken);

//     const { email, password } = users[1] as IUser;

//     const { status, body } = await chai.request(app).get('/login/role')
//       .set('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAdXNlci5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTcwNDIwODkyMSwiZXhwIjoxNzA1MDcyOTIxfQ.9_oIjQ8pOmvL011Z70As8Hutm60-f2jvAV0ppGrycD8');
//       // .send({ email, password });

//     expect(status).to.equal(200);
//     expect(body).to.deep.equal({ role: 'user' });
//   });

//   afterEach(sinon.restore);
// });