import React, { useState, useEffect } from 'react';


function GameWindowMenu ({ height, width }) {
  const [menuToggle, setMenuToggle] = useState(false);
  const [optionToggle, setOptionToggle] = useState(false);
  const [helpToggle, setHelpToggle] = useState(false);
  const [mainTop, setMainTop] = useState(null);
  const [mainLeft, setMainLeft] = useState(null);

  useEffect(() => {
    console.log('window: ', window)
  }, [height])

  return (
    <div 
    className='scoreFooter'
    style={{
      width: width,
      height: `${height}px`,
      border: '1px solid rgba(0, 0, 0, 1.0)',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'hsl(0, 0%, 100%)',
      padding: '0px 3px',
      fontSize: `${height / 2}px`,
    }} >
      <div 
        onClick={(event) => {
          console.log('target: ', event.target)
          setMainTop(event.target.offsetTop + ( height * 0.83 ));
          setMainLeft(event.target.offsetLeft - ( width * 0.035 ));
          setMenuToggle(!menuToggle);
        }}
        onResize={(event) => {
          console.log('target: ', event.target)
          setMainTop(event.target.offsetTop + ( height * 0.83 ));
          setMainLeft(event.target.offsetLeft - ( width * 0.035 ));
        }}
        className='flex flex-row mx-4'
      >
        <p className='underline'>M</p>
        <p>enu</p>
      </div>
      <div className='flex flex-row mx-4'>
        <p className='underline'>O</p>
        <p>ption</p>
      </div>
      <div className='flex flex-row mx-4'>
        <p className='underline'>H</p>
        <p>elp</p>
      </div>
      <div>
        {menuToggle ? 
        <div 
          className='bg-slate-100'
        style={
          {
            height: 6 * height,
            width: 0.15 * width,
            position: 'absolute',
            top: `${mainTop}px`,
            left: `${mainLeft}px`
          }
        }
        >

        </div> 
        : 
        <div></div>}
      </div>

    </div>
  )
}

export default GameWindowMenu;