import React, { useEffect, useState } from 'react';
import "./Style.css"
import "./pic.css"
import { Box} from '@mui/material';


const TapGame = () => {
    const [clickCount, setClickCount] = useState(0)
    const [autoClickerCount, setAutoClickerCount] = useState(0)
    const [levelAutoClicker, levelUPAutoClicker] = useState(0)
    const [Money, setMoney] = useState(0)
    const [levelMoneyGen, levelUPMoneyGen] = useState(0)
    const [levelClicker, levelUPClicker] = useState(0)
    const [MoneyPerTap, setMoneyPerSec] = useState(5)
    let MaxLevelClicker, MaxLevelMoneyGen, MaxLevelAutoClicker = false

    const handleTap = () => {
      setClickCount((clickCount + ((levelClicker + 1))))
      setMoney(Money + (MoneyPerTap * (levelClicker + 1)))
    };

    const handleBuyAutoClicker = () => {
      if (levelAutoClicker < 10) 
      {
          if (Money >= (20 * (levelAutoClicker + 1))){
            levelUPAutoClicker(levelAutoClicker + 1)
            setMoney(Money - (20 * (levelAutoClicker + 1)))
            setAutoClickerCount(autoClickerCount + 1)
          }
      }else
      {
        MaxLevelAutoClicker = true
      }
      
    };
    const handleMoneyGen = () => {
      if(levelMoneyGen < 10)
      {
          if((Money >= (10 * (levelMoneyGen + 1))) ) {
          levelUPMoneyGen(levelMoneyGen + 1)
          setMoney(Money - (10 * (levelMoneyGen + 1)))
          setMoneyPerSec(MoneyPerTap + 5)
        }
      }else
      
      {
        MaxLevelMoneyGen = true
      }
      
    }

    const handleTapCount = () => {
      if (levelClicker < 10)
      {
          if((Money >= (5 * (levelClicker + 1))) )
        {
          levelUPClicker(levelClicker + 1)
          setMoney(Money - (5 * (levelClicker + 1)))
          // setMoney(Money + (MoneyPerTap * (levelClicker + 1)))
        }
      }else
      {
        MaxLevelClicker = true
      }
      
    }

    useEffect(() => {
      const autoClickerInterval = setInterval(() => {
        setClickCount((prevCount) => prevCount + autoClickerCount)
        setMoney((prevMoney) => prevMoney + (autoClickerCount * MoneyPerTap))
        // console.log(autoClickerCount * MoneyPerTap)
        // console.log("auto" + autoClickerCount)
        // console.log("MPt" + MoneyPerTap)
      }, 1000)
  
      return () => clearInterval(autoClickerInterval);
    }, [autoClickerCount, MoneyPerTap]);
    
    return (
        <div>
          <span className='CountLabel'>Click Count: {clickCount}</span>
          <span className='MoneyLabel'>Money: {Money}</span>
          <Box
            sx={{
              width: '40%' ,
              height: 500,
              backgroundColor: 'warning.dark',
              padding: '20px',
              marginLeft: 'auto',
              marginRight: 'auto',
              opacity: [0.9, 0.8, 0.7],
              '&:hover': {
                backgroundColor: 'warning.main',
                opacity: [0.9, 0.8, 0.7],
              },
            }} onClick = {handleTap}
            ><div className='textInBox'>Click me!</div>
            </Box>
            <span className='spanFirst'>Auto Clicker Count: {autoClickerCount} |</span>
          <span className='span'>Money per Sec: {(MoneyPerTap * autoClickerCount)} |</span>
          <span className='span'>Money per Click : {MoneyPerTap * (levelClicker + 1)} |</span>
          <span className='spanLast'>Click per Count: {((levelClicker + 1))}</span>
          <button className='boostButtonFirst' onClick={handleTapCount}>Buy Tap Count {levelClicker < 10 && <span>{(5 * (levelClicker + 1))} ฿ </span>} 
                                                          {levelClicker !== 0 &&<span>(lvl.{levelClicker}) </span>}</button>
          <button className='boostButton' onClick={handleMoneyGen}>Buy Money Gen {levelMoneyGen < 10 && <span>{(10 * (levelMoneyGen + 1))} ฿ </span>}
                                                                    {levelMoneyGen !== 0 &&<span>(lvl.{levelMoneyGen}) </span>}</button>
          <button className='boostButton' onClick ={handleBuyAutoClicker}>Buy Auto Clicker {levelAutoClicker < 10 && <span>{(20 * (levelAutoClicker + 1))} ฿ </span>} 
                                                                    {levelAutoClicker !== 0 &&<span>(lvl.{levelAutoClicker}) </span>}</button>

          

        </div>
      );
};

export default TapGame;
