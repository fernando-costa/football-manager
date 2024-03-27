import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import SequelizeTeam from '../database/models/SequelizeTeam';
import {
  finishedMatches,
  leaderboardHome,
  leaderboardAway,
  teams,
} from './mocks/leaderboards/leaderboards.mocks';
import SequelizeMatch from '../database/models/SequelizeMatch';

const { expect } = chai;

chai.use(chaiHttp);


describe('Testing leaderboards', () => {
  describe('GET /leaderboard', () => {
    it('/home should return home teams', async () => {
      sinon.stub(SequelizeTeam, 'findAll').resolves(SequelizeTeam.bulkBuild(teams));
      sinon.stub(SequelizeMatch, 'findAll').resolves(SequelizeMatch.bulkBuild(finishedMatches));

      const { status, body } = await chai.request(app).get('/leaderboard/home');

      expect(status).to.equal(200);
      expect(body).to.deep.equal(leaderboardHome);
    });

    it('/away should return away teams', async () => {
      sinon.stub(SequelizeTeam, 'findAll').resolves(SequelizeTeam.bulkBuild(teams));
      sinon.stub(SequelizeMatch, 'findAll').resolves(SequelizeMatch.bulkBuild(finishedMatches));

      const { status, body } = await chai.request(app).get('/leaderboard/away');

      expect(status).to.equal(200);
      expect(body).to.deep.equal(leaderboardAway);
    });

    afterEach(() => {
      sinon.restore();
    });

  });
});
