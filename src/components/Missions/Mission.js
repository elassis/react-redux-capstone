import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setReserved, setUnReserved } from '../../redux/missions/missions';
import classes from './Missions.module.css';

const Mission = ({ mission }) => {
  const {
    id, name, description, reserved,
  } = mission;
  const [buttonContent, setButtonContent] = useState('Join Mission');
  const [status, setStatus] = useState('NOT A MEMBER');
  const dispatch = useDispatch();

  const handleJoinMission = () => {
    if (!reserved) {
      setButtonContent('Leave Mission');
      setStatus('Active Member');
      dispatch(setReserved(id));
    } else if (reserved) {
      setButtonContent('Join Mission');
      setStatus('NOT A MEMBER');
      dispatch(setUnReserved(id));
    }
  };

  return (
    <tr className={classes.tableRow}>
      <td className={classes.tableData}>{name}</td>
      <td className={classes.tableData}>{description}</td>
      <td className={classes.tableData}>
        <span className={`${classes.tableDataStatus} ${!reserved ? classes.statusActive : classes.statusInactive}`}>
          {status}
        </span>
      </td>
      <td className={`${classes.tableData} ${classes.tableDataBtn}`}>
        <button className={!reserved ? classes.joinMissionBtn : classes.leaveMissionBtn} onClick={handleJoinMission} type="button">
          {buttonContent}
        </button>
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
