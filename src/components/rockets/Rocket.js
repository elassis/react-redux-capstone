import React from 'react';
import PropTypes from 'prop-types';
import classes from './rockets.module.css';

const Rocket = (props) => {
  const {
    id, image, title, description,
  } = props;
  return (
    <li className={classes.row} key={id}>
      <img src={image} alt="rocket-img" className={classes.image} />
      <div>
        <p className={classes.title}>{title}</p>
        <div className={classes.textSection}>
          <p className={classes.badge}>reserved</p>
          <p>{description}</p>
        </div>
        <button type="button">reserve rocket</button>
      </div>
    </li>
  );
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Rocket;
