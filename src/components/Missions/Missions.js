import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../../redux/missions/missions';
import classes from './Missions.module.css';
import Mission from './Mission';

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadingMissions = async () => {
      await dispatch(getMissions());
    };
    loadingMissions();
  }, []);

  return (
    <section>
      <table className={classes.missionsTable}>
        <thead>
          <tr>
            <th className={classes.tableHeader}>Mission</th>
            <th className={classes.tableHeader}>Description</th>
            <th className={classes.tableHeader}>Status</th>
            <th className={classes.tableHeader} aria-label="Empty header" />
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <Mission key={mission.id} mission={mission} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Missions;
