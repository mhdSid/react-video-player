import { playerActions } from "./actions";

const initialPlayerState = {
  loading: true,
  playing: false,
  duration: null,
  currentTime: null,
  progress: null
};

export const player = (state = initialPlayerState, action) => {
  switch (action.type) {
    case playerActions.SETLOADING: {
      return {
        ...state,
        loading: action.payload
      }
    }
    case playerActions.SETPROGRESS: {
      return {
        ...state,
        progress: action.payload
      }
    }
    case playerActions.SETDURATION: {
      return {
        ...state,
        duration: action.payload
      }
    }
    case playerActions.SETCURRENTTIME: {
      return {
        ...state,
        currentTime: action.payload
      }
    }
    case playerActions.SETPLAYING: {
      return {
        ...state,
        playing: action.payload
      };
    }
    case playerActions.PLAY:
      return {
        ...state,
      };
    case playerActions.PAUSE: {
      return {
        ...initialPlayerState,
        details: [...action.payload]
      };
    }
    default: {
      return {
        ...initialPlayerState
      };
    }
  }
}
