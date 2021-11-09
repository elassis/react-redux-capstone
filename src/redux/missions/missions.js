const GET_MISSIONS_SUCCESS = 'react-redux-capstone/missions/GET_MISSIONS_SUCCESS';

const initialState = [];

export const getMissions = () => {};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS_SUCCESS:
      return [
        ...action.payload,
      ];
    default:
      return state;
  }
};
