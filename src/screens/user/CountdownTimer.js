import moment from "jalali-moment";
import { Center, HStack } from "native-base";
import React, { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import pallete from "../../utils/theme/pallete";
// import "./styles.css";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6
};

const renderTime = (dimension, time) => {

  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

  

export default function App(props) {
  const [endTime1, setEndTime1] = useState(false);
  const [decriment, setDecriment] = useState( props.start - moment().unix() / 1000);
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = props.start
  const interval = () => {
    
    setEndTime1(false);
    let timer =(props.start - moment().unix())
  
    
    const myInterval = setInterval(function () {
      
      if (timer > 0) {
        timer -= 1;
        // setDecriment(timer);
      } else {
        timer =0
        clearInterval(myInterval);
        setEndTime1(true);
        props.startGame()
      }
    }, 1000);
  };

  useEffect(() => {
interval()
  }, []);

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (

    <HStack space={3}  alignItems='center'>
      {/* <CountdownCircleTimer
        {...timerProps}
        colors="#7E2E84"
        duration={daysDuration}
        initialRemainingTime={remainingTime}
        size={60}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("days", getTimeDays(daysDuration - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer> */}
      { remainingTime % daySeconds > 1 ||remainingTime % daySeconds == 1  && <CountdownCircleTimer
        {...timerProps}
        colors='#6cc4f0'
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        size={70}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > hourSeconds ,delay: 1.5
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("ساعت", getTimeHours(daySeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>}
      <CountdownCircleTimer
        {...timerProps}
        colors='#6cc4f0'
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        size={70}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("دقیقه", getTimeMinutes(hourSeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors='#6cc4f0'
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        size={70}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > 0
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("ثانیه", getTimeSeconds(elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
    </HStack>
  );
}
