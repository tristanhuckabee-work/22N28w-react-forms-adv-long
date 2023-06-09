import { useState } from "react";
import { NavLink } from "react-router-dom";

import './NavBar.css';
import logo from '../../assets/logo.png';

export default function NavBar() {
  const [location, setLocation] = useState('Home');

  return (
    <>
      <header>
        <img src={logo} alt="logo" />
        <div className='header-right'>
          <h1>Survey Tool</h1>
          <p>{location}</p>
        </div>
      </header>
      <nav>
        <NavLink
          activeClassName='active'
          onClick={() => {setLocation('Sample Survey')}}
          to="/surveys/sample"
        >
          Sample Survey
        </NavLink>
        <NavLink
          activeClassName='active'
          onClick={() => {setLocation('Sensory Preferences')}}
          to="/surveys/sensory-preferences"
        >
          Sensory Preferences
        </NavLink>
        <NavLink
          activeClassName='active'
          onClick={() => {setLocation('Report')}}
          to="/reports"
        >
          Report
        </NavLink>
        <NavLink
          activeClassName='active'
          onClick={() => {setLocation('Home')}}
          to="/home"
        >
          Home
        </NavLink>
      </nav>
    </>
  )
}