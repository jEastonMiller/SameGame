import React, { useState, useEffect } from 'react';
import useWindowDimensions from '../components/windowSizeHook';

import { Block, GameToolbar, GameWindowMenu, ScoreFooter } from '../components/components'

function MainContainer ( { height, width, fontSize, mark, point, score, setMark, setScore, setPoint }) {
  const [gameWidth, setGameWidth] = useState(width);
  const [gameHeight, setGameHeight] = useState(height);
  const [startMatrix, setStartMatrix] = useState(null);
  const [blocks, setBlocks] = useState([]);
  const [matrix, setMatrix] = useState([]);
  const [matrixUpdate, setMatrixUpdate] = useState(false);
  const [boardSize, setBoardSize] = useState(10);
  const [coordCacheStore, setCoordCacheStore] = useState(null);
  const [matchesRemaining, setMatchesRemaining] = useState(false);
  // const { height, width } = useWindowDimensions();


  // initialize block list
  useEffect(() => {
  const blockVals = [{letter: 'A', color: 'hsl(240, 98%, 48%)', textColor: 'rgba(0, 0, 0, 1.0'}, {letter: 'B', color: 'hsl(357, 99%, 48%)', textColor: 'rgba(0, 0, 0, 1.0' }, {letter: 'C', color: 'hsl(300, 98%, 50%)', textColor: 'rgba(0, 0, 0, 1.0'}, {letter: 'D', color: 'hsl(60, 98%, 50%)', textColor: 'rgba(0, 0, 0, 1.0'}, {letter: 'E', color: 'hsl(180, 99%, 50%)', textColor: 'rgba(0, 0, 0, 1.0'}]
  const outputMatrix = [];
  const outputBlocks = []
  for(let i = 0; i < boardSize; i++){
    const pusher = [];
    for(let n = 0; n < 20; n++) {
      const randVal = blockVals[Math.floor(Math.random() * 5)]
      outputBlocks.push({x: n, y: i, val: randVal })
      pusher.push(randVal);
    }
    outputMatrix.push(pusher);
  };
  if (!startMatrix) setStartMatrix(outputMatrix);
  setMatrix(outputMatrix);
  setBlocks(outputBlocks);
  console.log(blocks);
  },[])

  // update block list
  useEffect(() => {
    if (matrix[0]) {
      const newBlockList = []
      for(let i = 0; i < boardSize; i++){
        for(let n = 0; n < 20; n++) {
          if (matrix[i][n]) newBlockList.push({x: n, y: i, val: matrix[i][n] })
          else newBlockList.push( {x: n, y: i, val: '' })
        };
      };
      setBlocks(newBlockList);
    }
    console.log('blocks: ', blocks)
  }, [matrixUpdate])

  // handle match click and score
  const handleMatchClick = (xCoord, yCoord, letter) => {
    const initCoord = {};
    initCoord[yCoord] = xCoord;
    let  coordCache = []
    coordCache.push(JSON.stringify(initCoord));

    function traverseHelper(x, y) {      
      let right = x + 1;
      let left = x - 1;
      let down = y - 1;
      let up = y + 1;
      
      let rightTraverse = {};
      let leftTraverse = {}
      let downTraverse = {};
      let upTraverse = {};

      rightTraverse[y] = right;
      leftTraverse[y] = left;
      downTraverse[down] = x;
      upTraverse[up] = x;

      // traverse and cache matches
      if ( x !== 19 && matrix[y][x + 1].letter === letter && !coordCache.includes(JSON.stringify(rightTraverse)) ) {
        coordCache.push(JSON.stringify(rightTraverse));
        traverseHelper(right, y)
      } 
      
      if ( x !== 0 && matrix[y][x - 1].letter === letter && !coordCache.includes(JSON.stringify(leftTraverse)) && leftTraverse ) {
        coordCache.push(JSON.stringify(leftTraverse));
        traverseHelper(left, y)
      } 
      
      if ( y !== 0 && matrix[y - 1][x].letter === letter && !coordCache.includes(JSON.stringify(downTraverse)) ) {
        coordCache.push(JSON.stringify(downTraverse));
        traverseHelper(x, down)
      } 
      
      if ( y !== boardSize - 1 && matrix[y + 1][x].letter === letter && !coordCache.includes(JSON.stringify(upTraverse)) ) {
        coordCache.push(JSON.stringify(upTraverse));
        traverseHelper(x, up)
      }
    }

    //const addedScore = Math.floor(( ( coordCache.length ) ** 3 ) / 3 - (coordCache.length ** 2) / 2 + coordCache.length / 6 + 1);
    let addedScore;
    
    // preview selection on first click
    if (!coordCacheStore) {
      // recurse to traverse
      traverseHelper(xCoord, yCoord);

      if(coordCache.length > 1)  {
        addedScore = Math.floor((coordCache.length - 2) ** 2);
        if (coordCache.length === 2) addedScore = 2;
        setCoordCacheStore(coordCache);
        setMark(coordCache.length);
        setPoint(`(POINT :   ${addedScore})`)
        let newMatrix = JSON.parse(JSON.stringify(matrix))
        for (let i = 0; i < coordCache.length; i++){
          let replacementY = Object.keys(JSON.parse(coordCache[i]))[0]
          let replacementX = Object.values(JSON.parse(coordCache[i]))[0]
          newMatrix[replacementY][replacementX].textColor = newMatrix[replacementY][replacementX].color;
          newMatrix[replacementY][replacementX].color = 'hsl(0, 0%, 100%)';
        }
        
        setMatrix(newMatrix);
        setMatrixUpdate(!matrixUpdate);
      }
    }

    // check for any remaining matches
    const handleMatchesRemaining = () => {
      function checkHelper(x, y) {      
        let right = x + 1;
        let left = x - 1;
        let down = y - 1;
        let up = y + 1;
        
        let rightTraverse = {};
        let leftTraverse = {}
        let downTraverse = {};
        let upTraverse = {};
  
        rightTraverse[y] = right;
        leftTraverse[y] = left;
        downTraverse[down] = x;
        upTraverse[up] = x;
  
        // check if current block has a match on any side
        if ( x !== 19 && matrix[y][x + 1].letter === letter && !coordCache.includes(JSON.stringify(rightTraverse)) ||
           x !== 0 && matrix[y][x - 1].letter === letter && !coordCache.includes(JSON.stringify(leftTraverse)) && leftTraverse ||
           y !== 0 && matrix[y - 1][x].letter === letter && !coordCache.includes(JSON.stringify(downTraverse)) ||
           y !== boardSize - 1 && matrix[y + 1][x].letter === letter && !coordCache.includes(JSON.stringify(upTraverse))
           ) {
          return true;
        } 
        
        return false;
      }
  
      for(let i = 0; i < boardSize; i++){
        for(let n = 0; n < 20; n++) {
          if(checkHelper(n, i)) return true;
        }
        return false;
      };
  
    }

    // confirm selection
    if (coordCacheStore) {
      addedScore = Math.floor((coordCacheStore.length - 2) ** 2);
      if (coordCacheStore.length === 2) addedScore = 2;
      coordCache = JSON.parse(JSON.stringify(coordCacheStore))
      setCoordCacheStore(null);
      // update matrix
      setMark(0);
      setPoint(`(POINT :   0)`)
      setScore(score + addedScore);
      let newMatrix = JSON.parse(JSON.stringify(matrix))
      for (let i = 0; i < coordCache.length; i++){
        let replacementY = Object.keys(JSON.parse(coordCache[i]))[0]
        let replacementX = Object.values(JSON.parse(coordCache[i]))[0]
        newMatrix[replacementY][replacementX] = "";
      }

      // collapse vertical
      for (let n = 0; n < newMatrix[0].length; n++ ){
        for(let j = newMatrix.length - 1; j > 0; j--) {
          if( newMatrix[j][n] === "" ) {
            let pointer = j - 1;
            while (pointer > 0 && newMatrix[pointer][n] === "" ) --pointer;
            if (pointer >= 0){
              newMatrix[j][n] = newMatrix[pointer][n];
              newMatrix[pointer][n] = "";
            }
          }
        }
      }

      // collapse horizontal
      for (let j = 0; j < newMatrix[ boardSize - 1 ].length - 1; j++) {
        if(newMatrix[boardSize - 1][j] === "") {
          for (let n = 0; n < newMatrix.length; n++) {
            let pointer = j + 1;
            while (pointer < 19 && newMatrix[n][pointer] === "") ++pointer;
            newMatrix[n][j] = newMatrix[n][pointer];
            newMatrix[n][pointer] = "";
          }
        }
      }

      setMatchesRemaining(handleMatchesRemaining())
      setMatrix(newMatrix);
      setMatrixUpdate(!matrixUpdate);
    }
  }

  // deselect matches
  const handleDeselect = (currentCache) => {
    const  coordCache = currentCache;

    setCoordCacheStore(null);
    setMark(0);
    setPoint(`(POINT :   0)`)
    let newMatrix = JSON.parse(JSON.stringify(matrix))
    for (let i = 0; i < coordCache.length; i++){
      let replacementY = Object.keys(JSON.parse(coordCache[i]))[0]
      let replacementX = Object.values(JSON.parse(coordCache[i]))[0]
      console.log('new block selection: ', newMatrix[replacementY][replacementX])
      newMatrix[replacementY][replacementX].color = newMatrix[replacementY][replacementX].textColor;
      newMatrix[replacementY][replacementX].textColor = 'hsl(0, 0%, 0%)';
      
    }
    setMatrix(newMatrix);
    setMatrixUpdate(!matrixUpdate);

  }

  
  if (matchesRemaining) {
    return (
      <div>
        <div 
        className='grid border-1 border-gray bg-green-600'
          style={{
            height: height,
            width: width,
            gridTemplateColumns: `repeat(20, 5%)`,
            gridTemplateRows: `repeat(${boardSize}, ${100 / boardSize}%)`,
            fontSize: fontSize
          }} 
        >
          {blocks.map(
              block => 
                <Block 
                  key={`${block.x}${block.y}`} 
                  x={block.x} 
                  y={block.y} 
                  textColor={block.val.textColor} 
                  val={block.val.letter} 
                  color={block.val.color} 
                  boardSize={boardSize} 
                  coordCacheStore={coordCacheStore} 
                  handleMatchClick={handleMatchClick} 
                  handleDeselect={handleDeselect}
                />)}
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div 
        className='grid border-1 border-gray bg-green-600'
          style={{
            height: height,
            width: width,
            gridTemplateColumns: `repeat(20, 5%)`,
            gridTemplateRows: `repeat(${boardSize}, ${100 / boardSize}%)`,
            fontSize: fontSize
          }} 
        >
          {blocks.map(
              block => 
                <Block 
                  key={`${block.x}${block.y}`} 
                  x={block.x} 
                  y={block.y} 
                  textColor={block.val.textColor} 
                  val={block.val.letter} 
                  color={block.val.color} 
                  boardSize={boardSize} 
                  coordCacheStore={coordCacheStore} 
                  handleMatchClick={handleMatchClick} 
                  handleDeselect={handleDeselect}
                />)}
        </div>
        <div
          style={
            {
              position: 'absolute',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }
          }
        >
          <h1>Game Over</h1>
          <h2>{score}</h2>
        </div>
      </div>
    )
  }
  
}

export default MainContainer;