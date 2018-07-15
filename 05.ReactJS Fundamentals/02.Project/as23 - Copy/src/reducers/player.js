const INITIAL_STATE = {
    players: {},
  };
  
  const applySetPlayers = (state, action) => ({
    ...state,
    players: action.players
  });
  
  function playerReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
      case 'PLAYER_SET' : {
        return applySetPlayers(state, action);
      }
      default : return state;
    }
  }
  
  export default playerReducer;