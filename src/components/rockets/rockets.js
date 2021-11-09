import React from 'react';
import classes from './rockets.module.css';

const Rockets = () => {
  const fakeRockets = [
    {
      id: 0,
      title: 'rocket one',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elit nunc, condimentum at risus sed, aliquet ullamcorper lacus. Ut vulputate tortor eu nibh pellentesque fringilla.',
    },
    {
      id: 1,
      title: 'rocket two',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elit nunc, condimentum at risus sed, aliquet ullamcorper lacus. Ut vulputate tortor eu nibh pellentesque fringilla.',
    },
  ];
  return (
    <div>
      <ul className={classes.rocketList}>
        {fakeRockets.map((rocket) => (
          <li className={classes.row} key={rocket.id}>
            <div className={classes.image}>image</div>
            <div>
              <p className={classes.title}>{rocket.title}</p>
              <div className={classes.textSection}>
                <p className={classes.badge}>reserved</p>
                <p>{rocket.description}</p>
              </div>
              <button type="button">reserve rocket</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
