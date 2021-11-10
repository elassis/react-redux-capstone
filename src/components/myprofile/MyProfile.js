import React from 'react';
import { useSelector } from 'react-redux';
import classes from './MyProfile.module.css';

const MyProfile = () => {
  const missions = useSelector((state) => state.missionsReducer);
  const reservedMissions = missions.filter((mission) => mission.reserved);
  const rockets = useSelector((state) => state.rocketsReducer);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <section className={classes.myprofileContainer}>
      <div className={classes.missions}>
        <h2>My Rockets</h2>

        <ul className={classes.myProfileUl}>
          {reservedRockets.map((rocket) => (
            <li key={rocket.id} className={classes.myProfileLi}>
              {rocket.title}
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.missions}>
        <h2>My Missions</h2>

        <ul className={classes.myProfileUl}>
          {reservedMissions.map((mission) => (
            <li key={mission.id} className={classes.myProfileLi}>
              {mission.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MyProfile;
