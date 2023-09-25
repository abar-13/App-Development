import React from 'react'

export default function Sidebar() {
  return (
    <ul className="show-dropdown main-navbar">
      <div className="selector-active">
      <li>
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
      </ul>
      </div>
      
  )
}
