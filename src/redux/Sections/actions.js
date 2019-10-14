const sectionsActions = {
  GET: "SECIONS_GET",
  SET: "SECIONS_SET",
};

const getSections = (payload) => {
  return dispatch => {
    return dispatch({
      type: sectionsActions.GET,
      payload
    });
  };
};

const setSections = (payload) => {
  return dispatch => {
    return dispatch({
      type: sectionsActions.set,
      payload
    });
  };
};

export { sectionsActions, getSections, setSections };
