import React from 'react'
import './header01.css';
import logo from './logo.jpg'; 

export default function Header01() {
  return (
    <div className='main_header'>
      <div className='center_header'>
        <div className='logo_side'>
          <a href='#'>
          <img src={logo} className="App-logo" alt="logo" />
          </a>
        </div>


        <div className='right_side'>
          <div className='menu_set'>
            <ul>
              <li>
                <a href='/'>Route Management</a>
              </li>

              <li>
                <a href='#'>Vehical Management</a>
              </li>

              <li>
                <a href='#'>Book Tickets</a>
              </li>

            </ul>
          </div>

          <div className='name_set'>
            <ul>
            <li>
                <a href='#'>Hi UserName</a>
            </li>
            </ul>

          </div>

        </div>

      </div>
    </div>
  )
}
