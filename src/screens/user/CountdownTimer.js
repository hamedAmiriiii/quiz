import { View ,Text } from 'native-base';
import React, { useState, useEffect } from 'react';

const CountdownTimer = (props) => {
  const [time, setTime] = useState(props.timer); // 2 minutes in seconds

  useEffect(() => {
    const timer = setTimeout(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        props.startGame()
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [time]);

  const hour = Math.floor(time % 86400 / 3600);
  const minutes = Math.floor(time  % 3600 / 60);
  const seconds = time % 60;

  return (
    <View>
      <h3> تا شروع </h3>
      <Text fontSize="20" padding="3"
      >{`${hour.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')}: ${seconds.toString().padStart(2, '0')}`}</Text>
    </View>
  );
};

export default CountdownTimer;