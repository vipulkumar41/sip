export const sipCalculator = (data) => {
    return function (dispatch) {
      // api call method
      sipCalculatorRepo(data)
        .then((response) => {
          if (response.status == 0) {
            dispatch({ type: "GOT_SIP_CAL_DATA", payload: response });
          } else {
            dispatch({
              type: "FAILED_TO_GET_SIP_CAL_DATA",
              payload: response,
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: "FAILED_TO_GET_SIP_CAL_DATA",
            payload: response,
          });
        });
    };
  };