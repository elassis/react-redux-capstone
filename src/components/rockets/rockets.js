import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './rockets.module.css';
import Rocket from './Rocket';
import { getRockets } from '../../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const RocketsFetched = useSelector((state) => state.rocketsReducer);
  useEffect(() => {
    const loadRockets = async () => {
      await dispatch(getRockets());
    };
    if (RocketsFetched.length === 0) {
      loadRockets();
    }
  }, []);
  return (
    <div>
      <ul className={classes.rocketList}>
        {RocketsFetched.map((rocket) => (
          <Rocket
            id={rocket.id}
            key={rocket.id}
            title={rocket.title}
            image={rocket.image}
            description={rocket.description}
            reserved={rocket.reserved}
          />
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
