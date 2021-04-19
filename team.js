const team = {
_players : [
  {
  firstName : 'Pablo',
  lastName : 'Sanchez',
  age : 29
},
{  
  firstName : 'Liam',
  lastName : 'Rotari',
  age : 33
},
{
  firstName : 'Kimi',
  lastName : 'Albot',
  age : 37
}],
_games : [
  {
    opponent :'Gloucester',
    teamPoints : 33, 
    opponentPoints : 29
  },
  {
    opponent :'The Oaks',
    teamPoints : 27, 
    opponentPoints : 31 
  },
  {
    opponent :'The Outlaws',
    teamPoints : 24, 
    opponentPoints : 19
  }],
  get players (){
    return this._players;
  },
  get games(){
    return this._games;
  },

addPlayer(firstName, lastName, age){
  let player = {
    firstName : firstName,
    lastName : lastName,
    age : age
  }
  return this._players.push(player);
},
addGame(opponent, teamPoints, opponentPoints){
  let game ={
    opponent : opponent,
    teamPoints : teamPoints, 
    opponentPoints : onpopstate
  }
  return this._games.push(game);
}

};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Leicester Tigers', 171, 96);
team.addGame('Worcester Warriors', 50, 35);
team.addGame('All Blacks',161, 159);
console.log(team.players);
console.log(team.games);