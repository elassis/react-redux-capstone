import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setReserved, setUnReserved } from '../../redux/missions/missions';
import classes from './Missions.module.css';

const Mission = ({ mission }) => {
  const { id, name, description } = mission;
  const [joinMission, setJoinMission] = useState(false);
  const [buttonContent, setButtonContent] = useState('Join Mission');
  const [status, setStatus] = useState('NOT A MEMBER');
  const dispatch = useDispatch();

  const handleJoinMission = () => {
    if (!joinMission) {
      setButtonContent('Leave Mission');
      setStatus('Active Member');
      dispatch(setReserved(id));
    } else if (joinMission) {
      setButtonContent('Join Mission');
      setStatus('NOT A MEMBER');
      dispatch(setUnReserved(id));
    }

    setJoinMission(() => !joinMission);
  };

  return (
    <tr className={classes.tableRow}>
      <td className={classes.tableData}>{name}</td>
      <td className={classes.tableData}>{description}</td>
      <td className={classes.tableData}>
        <span className={`${classes.tableDataStatus} ${!joinMission ? classes.statusActive : classes.statusInactive}`}>
          {status}
        </span>
      </td>
      <td className={`${classes.tableData} ${classes.tableDataBtn}`}>
        <button className={!joinMission ? classes.joinMissionBtn : classes.leaveMissionBtn} onClick={handleJoinMission} type="button">
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
  },
};

Mission.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

export default Mission;
