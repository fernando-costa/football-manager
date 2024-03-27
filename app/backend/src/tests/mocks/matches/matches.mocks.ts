const finishedMatch = {
  id: 1,
  homeTeamId: 16,
  homeTeamGoals: 1,
  awayTeamId: 8,
  awayTeamGoals: 1,
  inProgress: false,
};

const unfinishedMatch = {
  id: 2,
  homeTeamId: 9,
  homeTeamGoals: 1,
  awayTeamId: 14,
  awayTeamGoals: 1,
  inProgress: true,
}

const matches = [ finishedMatch,unfinishedMatch ];

export {
  finishedMatch,
  unfinishedMatch,
  matches,
};
