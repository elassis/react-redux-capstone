import React from 'react';
import classes from './MyProfile.module.css';

const MyProfile = () => (
  <section className={classes.myprofileContainer}>
    <div className={classes.rockets}>
      <h2>My Missions</h2>
      <ul className={classes.myProfileUl}>
        <li className={classes.myProfileLi}>SES</li>
        <li className={classes.myProfileLi}>AsiaSat</li>
        <li className={classes.myProfileLi}>ABS</li>
      </ul>

    </div>
    <div className={classes.missions}>
      <h2>My Rockets</h2>

      <ul className={classes.myProfileUl}>
        <li className={classes.myProfileLi}>Falcon 9</li>
        <li className={classes.myProfileLi}>Falcon Heavy</li>
        <li className={classes.myProfileLi}>Starship</li>
      </ul>
    </div>
  </section>
);

export default MyProfile;
