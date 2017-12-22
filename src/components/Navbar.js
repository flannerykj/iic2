import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return(
      <nav className='navbar is-light'>
          <div className='navbar-brand'>
              <h3 className='title is-2'>Is it chowder?</h3>
            {/*
            <button className="button navbar-burger">
              <span></span>
              <span></span>
              <span></span>
            </button>
            */}
          </div>
            <div className="navbar-menu">
              {/*
            <div className="navbar-start">
              <!-- navbar items -->
              <a className="navbar-item">
                Home
              </a>
            </div>

*/}

              {/*
            <div className="navbar-end">
              <a className="navbar-item">
               About
              </a>

            </div>

*/}
          </div>
      </nav>
    )
  }
}

export default Navbar;
