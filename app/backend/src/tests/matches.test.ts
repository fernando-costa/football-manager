import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import SequelizeMatch from '../database/models/SequelizeMatch';
import { finishedMatch, unfinishedMatch, matches } from './mocks/matches/matches.mocks';
import { validLoginBody } from './mocks/users/users.mocks';
import JWT from '../utils/JWT';
import { it } from 'mocha';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testing Matches', () => {
  const authorizedUser = validLoginBody;
  const validToken = JWT.sign(authorizedUser);
  const mockedMatch = finishedMatch;
  const mockedUnfinishedMatch = unfinishedMatch;
  const mockedMatches = matches;

  describe('GET /matches', () => {
    it("should return a list of matches", async () => {
      sinon.stub(SequelizeMatch, 'findAll').resolves(SequelizeMatch.bulkBuild(mockedMatches));
      const chaiHttpResponse = await chai.request(app).get('/matches');

      expect(chaiHttpResponse).to.have.status(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(mockedMatches);
    });

    it('should return a match by its id', async () => {
      sinon
        .stub(SequelizeMatch, 'findByPk')
        .resolves(SequelizeMatch.build(mockedMatch));
      const chaiHttpResponse = await chai.request(app).get('/matches/1');

      expect(chaiHttpResponse).to.have.status(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(mockedMatch);
    });

    it('should return 404 when team is not found', async () => {
      sinon.stub(SequelizeMatch, 'findByPk').resolves(null);
      const chaiHttpResponse = await chai.request(app).get('/matches/1');

      expect(chaiHttpResponse).to.have.status(404);
      expect(chaiHttpResponse.body).to.be.deep.equal({
        message: 'Match with id 1 not found',
      });
    });

    it('should return only matches in progress', async () => {
      sinon.stub(SequelizeMatch, 'findAll').resolves([ SequelizeMatch.build(mockedUnfinishedMatch) ]);
      const chaiHttpResponse = await chai
        .request(app)
        .get('/matches?inProgress=true');

      expect(chaiHttpResponse).to.have.status(200);
      expect(chaiHttpResponse.body).to.be.deep.equal([ mockedUnfinishedMatch ]);
    });

    it('should return only finished matches', async () => {
      sinon.stub(SequelizeMatch, 'findAll').resolves([ SequelizeMatch.build(mockedMatch) ]);
      const chaiHttpResponse = await chai
        .request(app)
        .get('/matches?inProgress=false');

      expect(chaiHttpResponse).to.have.status(200);
      expect(chaiHttpResponse.body).to.be.deep.equal([ mockedMatch ]);
    });

    afterEach(() => {
      sinon.restore();
    });
  });

  describe('PATCH to finish /matches', () => {
    it('should finish match by its id', async () => {
      sinon.stub(SequelizeMatch, 'update').resolves([ 1 ]);
      const chaiHttpResponse = await chai
        .request(app)
        .patch('/matches/1/finish')
        .set('Authorization', `Bearer ${validToken}`);

      expect(chaiHttpResponse).to.have.status(200);
      expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Finished' });
    });

    it('should deny service with invalid token', async () => {
      sinon.stub(SequelizeMatch, 'update').resolves([ 1 ]);
      const chaiHttpResponse = await chai
        .request(app)
        .patch('/matches/1/finish')
        .set('Authorization', `Bearer invalidToken`);

      expect(chaiHttpResponse).to.have.status(401);
      expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Token must be a valid token' });
    });

    it('should return error if not updated', async () => {
      sinon.stub(SequelizeMatch, 'update').resolves([ 0 ]);
      const chaiHttpResponse = await chai
        .request(app)
        .patch('/matches/100/finish')
        .set('Authorization', `Bearer ${validToken}`);

      expect(chaiHttpResponse).to.have.status(404);
      expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Match 100 not found' });
    });


    afterEach(() => {
      sinon.restore();
    });
  });


  describe('PATCH to update /matches', () => {
    it('should deny service with invalid token', async () => {
      sinon.stub(SequelizeMatch, 'update').resolves([ 0 ]);
      const chaiHttpResponse = await chai
        .request(app)
        .patch('/matches/1')
        .set('Authorization', `Bearer invalidToken`);

      expect(chaiHttpResponse).to.have.status(401);
      expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Token must be a valid token' });
    });

    it('should update match by id', async () => {
      sinon.stub(SequelizeMatch, 'update').resolves([ 1 ]);
      const chaiHttpResponse = await chai
        .request(app)
        .patch('/matches/1')
        .set('Authorization', `Bearer ${validToken}`)
        .send({ homeTeamGoals: 1, awayTeamGoals: 2 });

      expect(chaiHttpResponse).to.have.status(200);
      expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Updated' });

    });

    it('should return error if not updated', async () => {
      sinon.stub(SequelizeMatch, 'update').resolves([ 0 ]);
      const chaiHttpResponse = await chai
        .request(app)
        .patch('/matches/100')
        .set('Authorization', `Bearer ${validToken}`);

      expect(chaiHttpResponse).to.have.status(404);
      expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Match 100 not found' });
    });

    afterEach(() => {
      sinon.restore();
    });
  });

  describe('POST to create /matches', () => {
    it('should deny service with invalid token', async () => {
      const chaiHttpResponse = await chai
        .request(app)
        .post('/matches')
        .set('Authorization', `Bearer invalidToken`);

      expect(chaiHttpResponse).to.have.status(401);
      expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Token must be a valid token' });
    });

    it('should create match', async () => {
      sinon.stub(SequelizeMatch, 'create').resolves(SequelizeMatch.build(finishedMatch));
      const chaiHttpResponse = await chai
        .request(app)
        .post('/matches')
        .set('Authorization', `Bearer ${validToken}`)
        .send({ homeTeamId: 9, awayTeamId: 14, homeTeamGoals: 1, awayTeamGoals: 1 });

      expect(chaiHttpResponse).to.have.status(201);
      expect(chaiHttpResponse.body).to.be.deep.equal(finishedMatch);
    });

    it('should not create match with inexistant team', async () => {
      const chaiHttpResponse = await chai
        .request(app)
        .post('/matches')
        .set('Authorization', `Bearer ${validToken}`)
        .send({ homeTeamId: 99, awayTeamId: 14, homeTeamGoals: 1, awayTeamGoals: 1 });

      expect(chaiHttpResponse).to.have.status(404);
      expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'There is no team with such id!' });
    });

    afterEach(() => {
      sinon.restore();
    });
  });
});