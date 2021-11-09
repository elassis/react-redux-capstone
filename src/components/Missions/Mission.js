import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setReserved, setUnReserved } from '../../redux/missions/missions';
import classes from './Missions.module.css';

const Mission = ({ mission }) => {
  const {
    id, name, description, reserved,
  } = mission;
  const dispatch = useDispatch();

  const handleJoinMission = () => {
    if (!reserved) {
      dispatch(setReserved(id));
    } else if (reserved) {
      dispatch(setUnReserved(id));
    }
  };

  return (
    <tr className={classes.tableRow}>
      <td className={classes.tableData}>{name}</td>
      <td className={classes.tableData}>{description}</td>
      <td className={classes.tableData}>
        {reserved && (
          <span className={`${classes.tableDataStatus} ${classes.statusInactive}`}>
            Active Member
          </span>
        )}
        {!reserved && (
          <span className={`${classes.tableDataStatus} ${classes.statusActive}`}>
            NOT A MEMBER
          </span>
        )}
      </td>
      <td className={`${classes.tableData} ${classes.tableDataBtn}`}>
        { reserved && (
          <button className={classes.leaveMissionBtn} onClick={handleJoinMission} type="button">
            Leave Mission
          </button>
        )}
        {!reserved && (
          <button className={classes.joinMissionBtn} onClick={handleJoinMission} type="button">
            Join Mission
          </button>
        )}
      </td>
    </tr>
  );
};

Mission.defaultProps = {
  mission: {
    id: '',
    name: '',
    description: '',
    reserved: '',
  },
};

Mission.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }),
};

export default Mission;
