import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from './planet.png';
import classes from './Header.module.css';

const Header = () => {
  const routes = [
    {
      id: 0,
      text: 'rockets',
      path: '/rockets',
    },
    {
      id: 1,
      text: 'missions',
      path: '/missions',
    },
    {
      id: 2,
      text: 'my profile',
      path: '/myprofile',
    },
  ];
  return (
    <nav className={classes.navbar}>
      <div className={classes.logoContainer}>
        <img className={classes.logo} alt="logo" src={planet} />
        <p>spaces travelers&apos; hub</p>
      </div>
      <ul className={classes.listContainer}>
        {routes.map((route) => (
          <li className={classes.link} key={route.id}>
            <NavLink to={route.path} activeClassName={classes.activeLink} exact>
              {route.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
