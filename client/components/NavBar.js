import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import { MenuItems } from './components';

function NavBar ({ height, width, fontSize }) {
  const [menuToggle, setMenuToggle] = useState('none');
  const [optionToggle, setOptionToggle] = useState(false);
  const [helpToggle, setHelpToggle] = useState(false);
  const [mainTop, setMainTop] = useState(null);
  const [mainLeft, setMainLeft] = useState(null);
  const [menus, setMenus] = useState([
    {
      title: 'Menu',
      underline: 'M',
      submenuType: 'down',
      submenu: [ 
        { title: 'New Game',
          underline: 'N' },
        { title: 'Replay',
          underline: 'R'  },
        { title: 'Undo',
          underline: 'U'  },
        { title: 'Score',
          underline: 'c'  },
        { title: 'Information',
          underline: 'I'  },
        { title: 'Exit',
          underline: 'x'  },
      ]
    },
    {
      title: 'Option',
      underline: 'O',
      submenuType: 'down',
      submenu: [ 
        {
          title: 'Size',
          underline: 'S',
          submenuType: 'side', 
          submenu: [ 
              {
                title: 'Normal Size',
                underline: 'N', 
              },
              {
                title: 'Large Size',
                underline: 'L', 
              }
            ]
        }
      ]
    },
    {
      title: 'Help',
      underline: 'H',
      submenuType: 'down',
      submenu: [ 
        { title: 'Help...',
          underline: 'H' },
        { title: 'About',
          underline: 'A'  },
      ]
    },
  ]);

  useEffect(() => {
    console.log('window: ', window)
  }, [height])

  return (
    <div 
    className='scoreFooter'
    style={{
      width: width,
      height: height,
      border: '1px solid rgba(0, 0, 0, 1.0)',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'hsl(0, 0%, 100%)',
      position: 'static',
      fontSize: fontSize
    }} >
       <ul
        className='menus'
        fontSize={fontSize}
        style={
          {
           position: 'absolute'

          }
        }
       >
        {menus.map((menu, index) => {
          let pieces = menu.title.split(menu.underline);

          return (
            <MenuItems 
              pieces={pieces} 
              underline={menu.underline} 
              style={'drop'} 
              index={index}
              submenus={menu.submenu}
              submenuType={menu.submenuType}
              height={height}
            />
          )
          })
        }
       </ul>
    </div>
  )
}

export default NavBar;