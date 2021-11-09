/* eslint-disable max-len */
import React from 'react';
import classes from './Missions.module.css';

const Missions = () => {
  const dummydata = [
    {
      id: 1,
      mission: 'Thaicon',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      status: 'NOT A MEMBER',
    },

    {
      id: 2,
      mission: 'Telstar',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae',
      status: 'Active Member',
    },

  ];

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
          {dummydata.map((data) => {
            let button;
            if (data.status === 'NOT A MEMBER') {
              button = <button className={classes.joinMissionBtn} type="button">Join Mission</button>;
            } else {
              button = <button className={classes.leaveMissionBtn} type="button">Leave Mission</button>;
            }
            return (
              <tr key={data.id} className={classes.tableRow}>
                <td className={classes.tableData}>{data.mission}</td>
                <td className={classes.tableData}>{data.description}</td>
                <td className={classes.tableData}><span className={classes.tableDataStatus}>{data.status}</span></td>
                <td className={`${classes.tableData} ${classes.tableDataBtn}`}>{button}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Missions;
