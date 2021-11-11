const GET_ROCKETS_SUCCESS = 'react-redux-capstone/rockets/GET_rockets_SUCCESS';
const RESERVE_ROCKET = 'react-redux-capstone/rockets/RESERVE_ROCKET';
const UNRESERVE_ROCKET = 'react-redux-capstone/rockets/UNRESERVE_ROCKET';

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

export const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  id,
});
export const unReserveRocket = (id) => ({
  type: UNRESERVE_ROCKET,
  id,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS_SUCCESS:
      return [
        ...action.payload,
      ];
    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.id) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
    case UNRESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.id) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      });
    default:
      return state;
  }
};
