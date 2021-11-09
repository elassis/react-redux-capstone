const GET_ROCKETS_SUCCESS = 'react-redux-capstone/rockets/GET_rockets_SUCCESS';

const initialState = [];

export const getRockets = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  const newRockets = [];

  data.forEach((rocket) => {
    const newObj = {
      id: rocket.id,
      title: rocket.rocket_name,
      image: rocket.flickr_images[0],
      description: rocket.description,
    };
    newRockets.push(newObj);
  });
  dispatch({
    type: GET_ROCKETS_SUCCESS,
    payload: newRockets,
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS_SUCCESS:
      return [
        ...action.payload,
      ];
    default:
      return state;
  }
};
