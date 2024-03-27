const finishedMatches = [
  {
    "id": 1,
    "homeTeamId": 16,
    "homeTeamGoals": 1,
    "awayTeamId": 8,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "São Paulo"
    },
    "awayTeam": {
      "teamName": "Grêmio"
    }
  },
  {
    "id": 2,
    "homeTeamId": 9,
    "homeTeamGoals": 1,
    "awayTeamId": 14,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Internacional"
    },
    "awayTeam": {
      "teamName": "Santos"
    }
  },
  {
    "id": 3,
    "homeTeamId": 4,
    "homeTeamGoals": 3,
    "awayTeamId": 11,
    "awayTeamGoals": 0,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Corinthians"
    },
    "awayTeam": {
      "teamName": "Napoli-SC"
    }
  },
  {
    "id": 4,
    "homeTeamId": 3,
    "homeTeamGoals": 0,
    "awayTeamId": 2,
    "awayTeamGoals": 0,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Botafogo"
    },
    "awayTeam": {
      "teamName": "Bahia"
    }
  },
  {
    "id": 5,
    "homeTeamId": 7,
    "homeTeamGoals": 1,
    "awayTeamId": 10,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Flamengo"
    },
    "awayTeam": {
      "teamName": "Minas Brasília"
    }
  },
  {
    "id": 6,
    "homeTeamId": 5,
    "homeTeamGoals": 1,
    "awayTeamId": 13,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Cruzeiro"
    },
    "awayTeam": {
      "teamName": "Real Brasília"
    }
  },
  {
    "id": 7,
    "homeTeamId": 12,
    "homeTeamGoals": 2,
    "awayTeamId": 6,
    "awayTeamGoals": 2,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Palmeiras"
    },
    "awayTeam": {
      "teamName": "Ferroviária"
    }
  },
  {
    "id": 8,
    "homeTeamId": 15,
    "homeTeamGoals": 0,
    "awayTeamId": 1,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "São José-SP"
    },
    "awayTeam": {
      "teamName": "Avaí/Kindermann"
    }
  },
  {
    "id": 9,
    "homeTeamId": 1,
    "homeTeamGoals": 0,
    "awayTeamId": 12,
    "awayTeamGoals": 3,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Avaí/Kindermann"
    },
    "awayTeam": {
      "teamName": "Palmeiras"
    }
  },
  {
    "id": 10,
    "homeTeamId": 2,
    "homeTeamGoals": 0,
    "awayTeamId": 9,
    "awayTeamGoals": 2,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Bahia"
    },
    "awayTeam": {
      "teamName": "Internacional"
    }
  },
  {
    "id": 11,
    "homeTeamId": 13,
    "homeTeamGoals": 1,
    "awayTeamId": 3,
    "awayTeamGoals": 0,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Real Brasília"
    },
    "awayTeam": {
      "teamName": "Botafogo"
    }
  },
  {
    "id": 12,
    "homeTeamId": 6,
    "homeTeamGoals": 0,
    "awayTeamId": 4,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Ferroviária"
    },
    "awayTeam": {
      "teamName": "Corinthians"
    }
  },
  {
    "id": 13,
    "homeTeamId": 8,
    "homeTeamGoals": 2,
    "awayTeamId": 5,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Grêmio"
    },
    "awayTeam": {
      "teamName": "Cruzeiro"
    }
  },
  {
    "id": 14,
    "homeTeamId": 14,
    "homeTeamGoals": 2,
    "awayTeamId": 16,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Santos"
    },
    "awayTeam": {
      "teamName": "São Paulo"
    }
  },
  {
    "id": 15,
    "homeTeamId": 10,
    "homeTeamGoals": 0,
    "awayTeamId": 15,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Minas Brasília"
    },
    "awayTeam": {
      "teamName": "São José-SP"
    }
  },
  {
    "id": 16,
    "homeTeamId": 11,
    "homeTeamGoals": 0,
    "awayTeamId": 7,
    "awayTeamGoals": 0,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Napoli-SC"
    },
    "awayTeam": {
      "teamName": "Flamengo"
    }
  },
  {
    "id": 17,
    "homeTeamId": 1,
    "homeTeamGoals": 2,
    "awayTeamId": 8,
    "awayTeamGoals": 3,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Avaí/Kindermann"
    },
    "awayTeam": {
      "teamName": "Grêmio"
    }
  },
  {
    "id": 18,
    "homeTeamId": 12,
    "homeTeamGoals": 4,
    "awayTeamId": 5,
    "awayTeamGoals": 2,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Palmeiras"
    },
    "awayTeam": {
      "teamName": "Cruzeiro"
    }
  },
  {
    "id": 19,
    "homeTeamId": 11,
    "homeTeamGoals": 2,
    "awayTeamId": 2,
    "awayTeamGoals": 2,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Napoli-SC"
    },
    "awayTeam": {
      "teamName": "Bahia"
    }
  },
  {
    "id": 20,
    "homeTeamId": 7,
    "homeTeamGoals": 0,
    "awayTeamId": 9,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Flamengo"
    },
    "awayTeam": {
      "teamName": "Internacional"
    }
  },
  {
    "id": 21,
    "homeTeamId": 6,
    "homeTeamGoals": 3,
    "awayTeamId": 13,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Ferroviária"
    },
    "awayTeam": {
      "teamName": "Real Brasília"
    }
  },
  {
    "id": 22,
    "homeTeamId": 4,
    "homeTeamGoals": 3,
    "awayTeamId": 3,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Corinthians"
    },
    "awayTeam": {
      "teamName": "Botafogo"
    }
  },
  {
    "id": 23,
    "homeTeamId": 15,
    "homeTeamGoals": 2,
    "awayTeamId": 16,
    "awayTeamGoals": 3,
    "inProgress": false,
    "homeTeam": {
      "teamName": "São José-SP"
    },
    "awayTeam": {
      "teamName": "São Paulo"
    }
  },
  {
    "id": 24,
    "homeTeamId": 10,
    "homeTeamGoals": 2,
    "awayTeamId": 14,
    "awayTeamGoals": 2,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Minas Brasília"
    },
    "awayTeam": {
      "teamName": "Santos"
    }
  },
  {
    "id": 25,
    "homeTeamId": 2,
    "homeTeamGoals": 0,
    "awayTeamId": 6,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Bahia"
    },
    "awayTeam": {
      "teamName": "Ferroviária"
    }
  },
  {
    "id": 26,
    "homeTeamId": 13,
    "homeTeamGoals": 1,
    "awayTeamId": 1,
    "awayTeamGoals": 0,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Real Brasília"
    },
    "awayTeam": {
      "teamName": "Avaí/Kindermann"
    }
  },
  {
    "id": 27,
    "homeTeamId": 5,
    "homeTeamGoals": 1,
    "awayTeamId": 15,
    "awayTeamGoals": 2,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Cruzeiro"
    },
    "awayTeam": {
      "teamName": "São José-SP"
    }
  },
  {
    "id": 28,
    "homeTeamId": 16,
    "homeTeamGoals": 3,
    "awayTeamId": 7,
    "awayTeamGoals": 0,
    "inProgress": false,
    "homeTeam": {
      "teamName": "São Paulo"
    },
    "awayTeam": {
      "teamName": "Flamengo"
    }
  },
  {
    "id": 29,
    "homeTeamId": 9,
    "homeTeamGoals": 0,
    "awayTeamId": 4,
    "awayTeamGoals": 4,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Internacional"
    },
    "awayTeam": {
      "teamName": "Corinthians"
    }
  },
  {
    "id": 30,
    "homeTeamId": 3,
    "homeTeamGoals": 0,
    "awayTeamId": 12,
    "awayTeamGoals": 4,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Botafogo"
    },
    "awayTeam": {
      "teamName": "Palmeiras"
    }
  },
  {
    "id": 31,
    "homeTeamId": 8,
    "homeTeamGoals": 2,
    "awayTeamId": 10,
    "awayTeamGoals": 0,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Grêmio"
    },
    "awayTeam": {
      "teamName": "Minas Brasília"
    }
  },
  {
    "id": 32,
    "homeTeamId": 14,
    "homeTeamGoals": 5,
    "awayTeamId": 11,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Santos"
    },
    "awayTeam": {
      "teamName": "Napoli-SC"
    }
  },
  {
    "id": 33,
    "homeTeamId": 1,
    "homeTeamGoals": 1,
    "awayTeamId": 16,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Avaí/Kindermann"
    },
    "awayTeam": {
      "teamName": "São Paulo"
    }
  },
  {
    "id": 34,
    "homeTeamId": 9,
    "homeTeamGoals": 3,
    "awayTeamId": 6,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Internacional"
    },
    "awayTeam": {
      "teamName": "Ferroviária"
    }
  },
  {
    "id": 35,
    "homeTeamId": 10,
    "homeTeamGoals": 1,
    "awayTeamId": 5,
    "awayTeamGoals": 3,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Minas Brasília"
    },
    "awayTeam": {
      "teamName": "Cruzeiro"
    }
  },
  {
    "id": 36,
    "homeTeamId": 2,
    "homeTeamGoals": 0,
    "awayTeamId": 7,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Bahia"
    },
    "awayTeam": {
      "teamName": "Flamengo"
    }
  },
  {
    "id": 37,
    "homeTeamId": 15,
    "homeTeamGoals": 0,
    "awayTeamId": 13,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "São José-SP"
    },
    "awayTeam": {
      "teamName": "Real Brasília"
    }
  },
  {
    "id": 38,
    "homeTeamId": 14,
    "homeTeamGoals": 2,
    "awayTeamId": 4,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Santos"
    },
    "awayTeam": {
      "teamName": "Corinthians"
    }
  },
  {
    "id": 39,
    "homeTeamId": 3,
    "homeTeamGoals": 2,
    "awayTeamId": 11,
    "awayTeamGoals": 0,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Botafogo"
    },
    "awayTeam": {
      "teamName": "Napoli-SC"
    }
  },
  {
    "id": 40,
    "homeTeamId": 12,
    "homeTeamGoals": 4,
    "awayTeamId": 8,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Palmeiras"
    },
    "awayTeam": {
      "teamName": "Grêmio"
    }
  }
]

const leaderboardHome = [
  {
    "name": "Santos",
    "totalGames": 3,
    "totalVictories": 3,
    "totalDraws": 0,
    "totalLosses": 0,
    "goalsOwn": 3,
    "goalsFavor": 9,
    "totalPoints": 9,
    "goalsBalance": 6,
    "efficiency": 100
  },
  {
    "name": "Palmeiras",
    "totalGames": 3,
    "totalVictories": 2,
    "totalDraws": 1,
    "totalLosses": 0,
    "goalsOwn": 5,
    "goalsFavor": 10,
    "totalPoints": 7,
    "goalsBalance": 5,
    "efficiency": 77.78
  },
  {
    "name": "Corinthians",
    "totalGames": 2,
    "totalVictories": 2,
    "totalDraws": 0,
    "totalLosses": 0,
    "goalsOwn": 1,
    "goalsFavor": 6,
    "totalPoints": 6,
    "goalsBalance": 5,
    "efficiency": 100
  },
  {
    "name": "Grêmio",
    "totalGames": 2,
    "totalVictories": 2,
    "totalDraws": 0,
    "totalLosses": 0,
    "goalsOwn": 1,
    "goalsFavor": 4,
    "totalPoints": 6,
    "goalsBalance": 3,
    "efficiency": 100
  },
  {
    "name": "Real Brasília",
    "totalGames": 2,
    "totalVictories": 2,
    "totalDraws": 0,
    "totalLosses": 0,
    "goalsOwn": 0,
    "goalsFavor": 2,
    "totalPoints": 6,
    "goalsBalance": 2,
    "efficiency": 100
  },
  {
    "name": "São Paulo",
    "totalGames": 2,
    "totalVictories": 1,
    "totalDraws": 1,
    "totalLosses": 0,
    "goalsOwn": 1,
    "goalsFavor": 4,
    "totalPoints": 4,
    "goalsBalance": 3,
    "efficiency": 66.67
  },
  {
    "name": "Internacional",
    "totalGames": 3,
    "totalVictories": 1,
    "totalDraws": 1,
    "totalLosses": 1,
    "goalsOwn": 6,
    "goalsFavor": 4,
    "totalPoints": 4,
    "goalsBalance": -2,
    "efficiency": 44.44
  },
  {
    "name": "Botafogo",
    "totalGames": 3,
    "totalVictories": 1,
    "totalDraws": 1,
    "totalLosses": 1,
    "goalsOwn": 4,
    "goalsFavor": 2,
    "totalPoints": 4,
    "goalsBalance": -2,
    "efficiency": 44.44
  },
  {
    "name": "Ferroviária",
    "totalGames": 2,
    "totalVictories": 1,
    "totalDraws": 0,
    "totalLosses": 1,
    "goalsOwn": 2,
    "goalsFavor": 3,
    "totalPoints": 3,
    "goalsBalance": 1,
    "efficiency": 50
  },
  {
    "name": "Napoli-SC",
    "totalGames": 2,
    "totalVictories": 0,
    "totalDraws": 2,
    "totalLosses": 0,
    "goalsOwn": 2,
    "goalsFavor": 2,
    "totalPoints": 2,
    "goalsBalance": 0,
    "efficiency": 33.33
  },
  {
    "name": "Cruzeiro",
    "totalGames": 2,
    "totalVictories": 0,
    "totalDraws": 1,
    "totalLosses": 1,
    "goalsOwn": 3,
    "goalsFavor": 2,
    "totalPoints": 1,
    "goalsBalance": -1,
    "efficiency": 16.67
  },
  {
    "name": "Flamengo",
    "totalGames": 2,
    "totalVictories": 0,
    "totalDraws": 1,
    "totalLosses": 1,
    "goalsOwn": 2,
    "goalsFavor": 1,
    "totalPoints": 1,
    "goalsBalance": -1,
    "efficiency": 16.67
  },
  {
    "name": "Minas Brasília",
    "totalGames": 3,
    "totalVictories": 0,
    "totalDraws": 1,
    "totalLosses": 2,
    "goalsOwn": 6,
    "goalsFavor": 3,
    "totalPoints": 1,
    "goalsBalance": -3,
    "efficiency": 11.11
  },
  {
    "name": "Avaí/Kindermann",
    "totalGames": 3,
    "totalVictories": 0,
    "totalDraws": 1,
    "totalLosses": 2,
    "goalsOwn": 7,
    "goalsFavor": 3,
    "totalPoints": 1,
    "goalsBalance": -4,
    "efficiency": 11.11
  },
  {
    "name": "São José-SP",
    "totalGames": 3,
    "totalVictories": 0,
    "totalDraws": 0,
    "totalLosses": 3,
    "goalsOwn": 5,
    "goalsFavor": 2,
    "totalPoints": 0,
    "goalsBalance": -3,
    "efficiency": 0
  },
  {
    "name": "Bahia",
    "totalGames": 3,
    "totalVictories": 0,
    "totalDraws": 0,
    "totalLosses": 3,
    "goalsOwn": 4,
    "goalsFavor": 0,
    "totalPoints": 0,
    "goalsBalance": -4,
    "efficiency": 0
  }
]

const leaderboardAway = [
  {
    "name": "Palmeiras",
    "totalGames": 2,
    "totalVictories": 2,
    "totalDraws": 0,
    "totalLosses": 0,
    "goalsOwn": 0,
    "goalsFavor": 7,
    "totalPoints": 6,
    "goalsBalance": 7,
    "efficiency": 100
  },
  {
    "name": "Corinthians",
    "totalGames": 3,
    "totalVictories": 2,
    "totalDraws": 0,
    "totalLosses": 1,
    "goalsOwn": 2,
    "goalsFavor": 6,
    "totalPoints": 6,
    "goalsBalance": 4,
    "efficiency": 66.67
  },
  {
    "name": "Internacional",
    "totalGames": 2,
    "totalVictories": 2,
    "totalDraws": 0,
    "totalLosses": 0,
    "goalsOwn": 0,
    "goalsFavor": 3,
    "totalPoints": 6,
    "goalsBalance": 3,
    "efficiency": 100
  },
  {
    "name": "São José-SP",
    "totalGames": 2,
    "totalVictories": 2,
    "totalDraws": 0,
    "totalLosses": 0,
    "goalsOwn": 1,
    "goalsFavor": 3,
    "totalPoints": 6,
    "goalsBalance": 2,
    "efficiency": 100
  },
  {
    "name": "São Paulo",
    "totalGames": 3,
    "totalVictories": 1,
    "totalDraws": 1,
    "totalLosses": 1,
    "goalsOwn": 5,
    "goalsFavor": 5,
    "totalPoints": 4,
    "goalsBalance": 0,
    "efficiency": 44.44
  },
  {
    "name": "Ferroviária",
    "totalGames": 3,
    "totalVictories": 1,
    "totalDraws": 1,
    "totalLosses": 1,
    "goalsOwn": 5,
    "goalsFavor": 4,
    "totalPoints": 4,
    "goalsBalance": -1,
    "efficiency": 44.44
  },
  {
    "name": "Real Brasília",
    "totalGames": 3,
    "totalVictories": 1,
    "totalDraws": 1,
    "totalLosses": 1,
    "goalsOwn": 4,
    "goalsFavor": 3,
    "totalPoints": 4,
    "goalsBalance": -1,
    "efficiency": 44.44
  },
  {
    "name": "Grêmio",
    "totalGames": 3,
    "totalVictories": 1,
    "totalDraws": 1,
    "totalLosses": 1,
    "goalsOwn": 7,
    "goalsFavor": 5,
    "totalPoints": 4,
    "goalsBalance": -2,
    "efficiency": 44.44
  },
  {
    "name": "Flamengo",
    "totalGames": 3,
    "totalVictories": 1,
    "totalDraws": 1,
    "totalLosses": 1,
    "goalsOwn": 3,
    "goalsFavor": 1,
    "totalPoints": 4,
    "goalsBalance": -2,
    "efficiency": 44.44
  },
  {
    "name": "Avaí/Kindermann",
    "totalGames": 2,
    "totalVictories": 1,
    "totalDraws": 0,
    "totalLosses": 1,
    "goalsOwn": 1,
    "goalsFavor": 1,
    "totalPoints": 3,
    "goalsBalance": 0,
    "efficiency": 50
  },
  {
    "name": "Cruzeiro",
    "totalGames": 3,
    "totalVictories": 1,
    "totalDraws": 0,
    "totalLosses": 2,
    "goalsOwn": 7,
    "goalsFavor": 6,
    "totalPoints": 3,
    "goalsBalance": -1,
    "efficiency": 33.33
  },
  {
    "name": "Santos",
    "totalGames": 2,
    "totalVictories": 0,
    "totalDraws": 2,
    "totalLosses": 0,
    "goalsOwn": 3,
    "goalsFavor": 3,
    "totalPoints": 2,
    "goalsBalance": 0,
    "efficiency": 33.33
  },
  {
    "name": "Bahia",
    "totalGames": 2,
    "totalVictories": 0,
    "totalDraws": 2,
    "totalLosses": 0,
    "goalsOwn": 2,
    "goalsFavor": 2,
    "totalPoints": 2,
    "goalsBalance": 0,
    "efficiency": 33.33
  },
  {
    "name": "Minas Brasília",
    "totalGames": 2,
    "totalVictories": 0,
    "totalDraws": 1,
    "totalLosses": 1,
    "goalsOwn": 3,
    "goalsFavor": 1,
    "totalPoints": 1,
    "goalsBalance": -2,
    "efficiency": 16.67
  },
  {
    "name": "Botafogo",
    "totalGames": 2,
    "totalVictories": 0,
    "totalDraws": 0,
    "totalLosses": 2,
    "goalsOwn": 4,
    "goalsFavor": 1,
    "totalPoints": 0,
    "goalsBalance": -3,
    "efficiency": 0
  },
  {
    "name": "Napoli-SC",
    "totalGames": 3,
    "totalVictories": 0,
    "totalDraws": 0,
    "totalLosses": 3,
    "goalsOwn": 10,
    "goalsFavor": 1,
    "totalPoints": 0,
    "goalsBalance": -9,
    "efficiency": 0
  }
]

const teams = [
  {
    "id": 1,
    "teamName": "Avaí/Kindermann"
  },
  {
    "id": 2,
    "teamName": "Bahia"
  },
  {
    "id": 3,
    "teamName": "Botafogo"
  },
  {
    "id": 4,
    "teamName": "Corinthians"
  },
  {
    "id": 5,
    "teamName": "Cruzeiro"
  },
  {
    "id": 6,
    "teamName": "Ferroviária"
  },
  {
    "id": 7,
    "teamName": "Flamengo"
  },
  {
    "id": 8,
    "teamName": "Grêmio"
  },
  {
    "id": 9,
    "teamName": "Internacional"
  },
  {
    "id": 10,
    "teamName": "Minas Brasília"
  },
  {
    "id": 11,
    "teamName": "Napoli-SC"
  },
  {
    "id": 12,
    "teamName": "Palmeiras"
  },
  {
    "id": 13,
    "teamName": "Real Brasília"
  },
  {
    "id": 14,
    "teamName": "Santos"
  },
  {
    "id": 15,
    "teamName": "São José-SP"
  },
  {
    "id": 16,
    "teamName": "São Paulo"
  }
]

export {
  finishedMatches,
  leaderboardHome,
  leaderboardAway,
  teams,
}