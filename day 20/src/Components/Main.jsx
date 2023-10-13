import React, { useEffect, useState } from 'react';
import '../assests/css/Main.css';
import Navbar from '../Components/NavBar.jsx';
import { useSelector } from 'react-redux'; // Import useSelector

function Main() {
  const [activeItem, setActiveItem] = useState(null); 
  useEffect(() => {
    const menuItems = document.querySelectorAll('#accordian ul li a');
    menuItems.forEach((menuItem) => {
      menuItem.addEventListener('click', (e) => {
        const href = e.target.getAttribute('href').substring(1);
        setActiveItem(href);
        updateSelectorPosition(href);
      });
    });
    const path = window.location.pathname.split('/').pop() || 'index.html';
    updateSelectorPosition(path);
    setActiveItem(path);
  }, []);

  // Use useSelector to access the email from the Redux store
  const email = useSelector((state) => state.auth.email);

  const updateSelectorPosition = (item) => {
    const activeMenuItem = document.querySelector(`#accordian ul li a[href="${item}"]`);
    const selector = document.querySelector('.selector-active');
    if (activeMenuItem && selector) {
      const { top, height } = activeMenuItem.getBoundingClientRect();
      selector.style.top = `${top}px`;
      selector.style.height = `${height}px`;
    }
  };

  return (
    <div id="accordian">
      <p>{email}</p> {/* Display the email from Redux */}
      <Navbar />
      <ul className="show-dropdown main-navbar">
        <div className="selector-active"></div>
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
        <li className={activeItem === 'start' ? 'active' : ''}>
        <a href="update"><i className="far fa-calendar-alt"></i>Update Meet</a>
      </li>
      <li className={activeItem === 'start' ? 'active' : ''}>
      <a href="delete"><i className="far fa-calendar-alt"></i>Delete Meet</a>
    </li>
      </ul>
      <footer className="footer">
        <div className="footer-links">
          <a href="/privacypolicy">Privacy Policy</a>
          <a href="/termcondition">Terms and Conditions</a>
          <a href="/faq">FAQ</a>
        </div>
        <div className="social">
        <a href="https://www.linkedin.com/" className="social-btn-color-telegram">
          <div className="google-font social-btn-content">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxpbmtlZGluIj48cGF0aCBkPSJNMTYgOGE2IDYgMCAwIDEgNiA2djdoLTR2LTdhMiAyIDAgMCAwLTItMiAyIDIgMCAwIDAtMiAydjdoLTR2LTdhNiA2IDAgMCAxIDYtNnoiLz48cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSIxMiIgeD0iMiIgeT0iOSIvPjxjaXJjbGUgY3g9IjQiIGN5PSI0IiByPSIyIi8+PC9zdmc+"
              alt="Linkedin"
            />
          </div>
        </a>
        <a href="https://www.instagram.com/" className="social-btn-color-instagram">
          <div className="google-font social-btn-content">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWluc3RhZ3JhbSI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiByeD0iNSIgcnk9IjUiLz48cGF0aCBkPSJNMTYgMTEuMzdBNCA0IDAgMSAxIDEyLjYzIDggNCA0IDAgMCAxIDE2IDExLjM3eiIvPjxsaW5lIHgxPSIxNy41IiB4Mj0iMTcuNTEiIHkxPSI2LjUiIHkyPSI2LjUiLz48L3N2Zz4="
              alt="Instagram"
            />
          </div>
        </a>
        <a href="https://www.youtube.com/" className="social-btn-color-whatsapp">
          <div className="google-font social-btn-content">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXlvdXR1YmUiPjxwYXRoIGQ9Ik0yLjUgMTdhMjQuMTIgMjQuMTIgMCAwIDEgMC0xMCAyIDIgMCAwIDEgMS40LTEuNCA0OS41NiA0OS41NiAwIDAgMSAxNi4yIDBBMiAyIDAgMCAxIDIxLjUgN2EyNC4xMiAyNC4xMiAwIDAgMSAwIDEwIDIgMiAwIDAgMS0xLjQgMS40IDQ5LjU1IDQ5LjU1IDAgMCAxLTE2LjIgMEEyIDIgMCAwIDEgMi41IDE3Ii8+PHBhdGggZD0ibTEwIDE1IDUtMy01LTN6Ii8+PC9zdmc+"
              alt="Youtube"
            />
          </div>
        </a>

      </div>
         
      </footer>
    
    </div>
  );
}

export default Main;