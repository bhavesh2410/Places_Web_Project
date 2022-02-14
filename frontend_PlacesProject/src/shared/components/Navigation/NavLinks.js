import React, { useContext } from 'react';

import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';
import Button from '../FormElements/Button';
import './NavLinks.css';

function NavLinks(props) {
  const auth = useContext(AuthContext);
  console.log(`loggedin--${auth.isLoggedIn}`);
  return (
    <ul className='nav-links'>
      <li>
        <NavLink to='/' exact>
          ALL USERS
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to={`/${auth.userId}/places`}>MY PLACES</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to='/places/new'>ADD PLACE</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to='/auth'>AUTHENTICATE</NavLink>
        </li>
      )}
      {auth.isLoggedIn && <Button onClick={auth.logout}>LOGOUT</Button>}
    </ul>
  );
}

export default NavLinks;
