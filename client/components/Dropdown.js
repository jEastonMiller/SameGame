import React, { useState, useEffect } from 'react';
import useWindowDimensions from '../components/windowSizeHook';


function Dropdown( { submenus, dropdown, submenuType, height } ) {

  useEffect(() => {
    
  
  }, [])

    if(dropdown & submenuType === 'down') {
      return (
        <ul 
          className={`dropdown-${submenuType}`}
          style={
            {
              display: 'list-item',
              border: 'black solid 1px',
              position: 'absolute',
              transform: `translate(-6.2%, ${height})`,
              backgroundColor: 'rgba(255, 255, 255, 1.0)'
            }
          }
        >
          {submenus.map((submenu, index) => {

            let pieces = submenu.title.split(submenu.underline);

            return (<li key={index} className="menu-items">
              {pieces[0]}
              <u>{submenu.underline}</u>
              {pieces[1]}
            </li>)
            
    })}
        </ul> 
      )
    } else if (dropdown && submenuType === 'side') {
      <ul 
          className={`dropdown-${submenuType}`}
          style={
            {
              display: 'block',
              border: 'black solid 1px',
            }
          }
        >
          {submenus.map((submenu, index) => {
            let pieces = submenu.title.split(submenu.underline);

            return (<li key={index} className="menu-items">
              {pieces[0]}
              <u>{submenu.underline}</u>
              {pieces[1]}
            </li>)  
          })}
        </ul> 
    } else {
      <div
        style={
          {
            display: 'none'
          }
        }
      >

      </div>
    }


      
      
  
}

export default Dropdown;