const GET_ROCKETS_SUCCESS = 'react-redux-capstone/rockets/GET_rockets_SUCCESS';

const initialState = [];

export const getrockets = () => {};

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
