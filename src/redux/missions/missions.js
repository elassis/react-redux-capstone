const GET_MISSIONS_SUCCESS = 'react-redux-capstone/missions/GET_MISSIONS_SUCCESS';
const GET_MISSIONS_FAILURE = 'react-redux-capstone/missions/GET_MISSIONS_FAILURE';
const RESERVED_MISSION = 'react-redux-capstone/missions/RESERVED_MISSION';
const UNRESERVED_MISSION = 'react-redux-capstone/missions/UNRESERVED_MISSION';

const initialState = [];

export const getMissions = () => async (dispatch) => {
  try {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await response.json();
    const newData = [];

    data.forEach((mission) => {
      const missionData = {
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
      };

      newData.push(missionData);
    });

    dispatch({ type: GET_MISSIONS_SUCCESS, payload: newData });
  } catch (err) {
    dispatch({ type: GET_MISSIONS_FAILURE, err });
  }
};

export const setReserved = (id) => ({
  type: RESERVED_MISSION,
  id,
});

export const setUnReserved = (id) => ({
  type: UNRESERVED_MISSION,
  id,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS_SUCCESS:
      return [
        ...action.payload,
      ];

    case RESERVED_MISSION:
      return state.map((mission) => {
        if (mission.id !== action.id) {
          return mission;
        }
        return { ...mission, reserved: true };
      });

    case UNRESERVED_MISSION:
      return state.map((mission) => {
        if (mission.id !== action.id) {
          return mission;
        }
        return { ...mission, reserved: false };
      });

    default:
      return state;
  }
};
