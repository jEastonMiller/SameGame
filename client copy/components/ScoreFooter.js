import React, { useState, useEffect } from 'react';


function ScoreFooter ( { height, width, mark, point, score } ) {

  return (
    <div 
    className='scoreFooter'
    style={{
      width: width,
      height: `${height}px`,
      border: '1px solid rgba(0, 0, 0, 1.0)',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'hsl(0, 0%, 100%)',
      fontSize: `${height / 2}px`,
    }} >
      <div className='flex flex-row justify-between ml-12'>
        <p className='mr-7'>MARK: {mark}</p>
        <p>{point}</p>
      </div>
      <p className='flex flex-row justify-between mr-12'>SCORE      :      {score}</p>
    </div>
  )
}

export default ScoreFooter;