import React from 'react';

export default function Sidebar({ activeItem }) { // Receive activeItem as a prop
  return (
    <ul className="show-dropdown main-navbar">
      <div className="selector-active">
        <ul>
          <li className={activeItem === 'view' ? 'active' : ''}>
            <a href="view"><i className="fas fa-tachometer-alt"></i>View Meet</a>
          </li>
          <li className={activeItem === 'schedule' ? 'active' : ''}>
            <a href="schedule"><i className="far fa-address-book"></i>Schedule Meet</a>
          </li>


          <li className={activeItem === 'join' ? 'active' : ''}>
            <a href="join"><i className="far fa-clone"></i>Join Meet</a>
          </li>
          <li className={activeItem === 'start' ? 'active' : ''}>
            <a href="start"><i className="far fa-calendar-alt"></i>Start Meet</a>
          </li>
          <li className={activeItem === 'start' ? 'active' : ''}>
            <a href="update"><i className="far fa-calendar-alt"></i>Update Meet</a>
          </li>
          <li className={activeItem === 'start' ? 'active' : ''}>
            <a href="delete"><i className="far fa-calendar-alt"></i>Delete Meet</a>
          </li>
        </ul> {/* Closing </ul> tag for the list */}
      </div>
    </ul>
  );
}
