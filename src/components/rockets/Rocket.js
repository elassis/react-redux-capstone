import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import classes from './rockets.module.css';
import { reserveRocket, unReserveRocket } from '../../redux/rockets/rockets';

const Rocket = (props) => {
  const {
    id, image, title, description, reserved,
  } = props;
  const dispatch = useDispatch();
  const handlerReserveRocket = () => {
    if (!reserved) {
      dispatch(reserveRocket(id));
    } else if (reserved) {
      dispatch(unReserveRocket(id));
    }
  };
  return (
    <li className={classes.row} key={id}>
      <img src={image} alt="rocket-img" className={classes.image} />
      <p className={classes.title}>{title}</p>
      {reserved && (
      <div className={classes.wrapper}>
        <div className={classes.textSection}>
          <p className={classes.badge}>reserved</p>
          <p>{description}</p>
        </div>
        <button onClick={handlerReserveRocket} className={classes.cancel} type="button">cancel reservation</button>
      </div>
      )}
      {!reserved && (
      <div className={classes.wrapper}>
        <div className={classes.textSection}>
          <p>{description}</p>
        </div>
        <button onClick={handlerReserveRocket} type="button">reserve rocket</button>
      </div>
      )}
    </li>
  );
};

Rocket.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  reserved: PropTypes.bool,
};
Rocket.defaultProps = {
  reserved: false,
  description: '',
  title: '',
  image: '',
  id: 0,
};

export default Rocket;
