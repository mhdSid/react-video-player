const detailsActions = {
  GET: "DETAILS_GET",
  SET: "DETAILS_SET",
};

const getDetails = (payload) => {
  return dispatch => {
    return dispatch({
      type: detailsActions.GET,
      payload
    });
  };
};

const setDetails = (payload) => {
  return dispatch => {
    return dispatch({
      type: detailsActions.set,
      payload
    });
  };
};

export { detailsActions, getDetails, setDetails };
