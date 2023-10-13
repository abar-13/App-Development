import React from 'react';
import { Link } from 'react-router-dom';
import '../assests/Home.css'; 

function Home() {
  return (
    
    <div>
      <div className="navbar">
        
          <Link to="/login">Login</Link> 
        
        <div>
          <Link to="/register">Register</Link>
          <div className='aa'>
          <img src="https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 1" />
          </div>
        </div>
      </div>
      </div>
      
  );
}

export default Home;
