const playerActions = {
  PLAY: "PLAYER_PLAY",
  PAUSE: "PLAYER_PAUSE",
  SETLOADING: "PLAYER_SET_LOADING",
  SETPLAYING: "PLAYER_SET_PLAYING",
  SETDURATION: "PLAYER_SET_DURATION",
  SETCURRENTTIME: "PLAYER_SET_CURRENT_TIME",
  SETPROGRESS: "PLAYER_SET_PROGRESS"
};

const play = (payload) => {
  return dispatch => {
    return dispatch({
      type: playerActions.PLAY,
      payload
    });
  };
};

const pause = (payload) => {
  return dispatch => {
    return dispatch({
      type: playerActions.PAUSE,
      payload
    });
  };
};

const setLoading = (payload) => {
  return dispatch => {
    return dispatch({
      type: playerActions.SETLOADING,
      payload
    });
  };
};

const setPlaying = (payload) => {
  return dispatch => {
    return dispatch({
      type: playerActions.SETPLAYING,
      payload
    });
  };
};

const setDuration = (payload) => {
  return dispatch => {
    return dispatch({
      type: playerActions.SETDURATION,
      payload
    });
  };
};

const setCurrentTime = (payload) => {
  return dispatch => {
    return dispatch({
      type: playerActions.SETCURRENTTIME,
      payload
    });
  };
};

const setProgress = (payload) => {
  return dispatch => {
    return dispatch({
      type: playerActions.SETPROGRESS,
      payload
    });
  };
};

export { playerActions, play, pause, setLoading, setPlaying, setDuration, setCurrentTime, setProgress };
