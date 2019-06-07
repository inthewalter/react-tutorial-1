import React from 'react';
import { Link } from 'react-router-dom';

const Gnb = (props) => {
  return (
  <ul className="gnb">
    <li>
      <Link to="/?day=mon" className={ props.day === 'mon' ? 'tab_day on' : 'tab_day'}>Monday</Link>
    </li>
    <li>
      <Link to="/?day=tue" className={ props.day === 'tue' ? 'tab_day on' : 'tab_day'}>Tuesday</Link>
    </li>
    <li>
      <Link to="/?day=wed" className={ props.day === 'wed' ? 'tab_day on' : 'tab_day'}>Wednesday</Link>
    </li>
  </ul>
)
}


export default Gnb;
