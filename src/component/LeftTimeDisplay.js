import { useEffect, useState } from "react";
import DigitalBall from "./DigitalBall";


const remainTime = (target) => {
  let now = new Date();
  let remainSeconds = (target.getTime() - now.getTime()) / 1000;

  let remainDays = Math.floor(remainSeconds / 86400);
  let remainHour = Math.floor(remainSeconds % 86400 / 3600);
  let remainMins = Math.floor(remainSeconds % 3600 / 60);
  let remainSecs = Math.floor(remainSeconds % 60);

  return [remainDays, remainHour, remainMins, remainSecs]
}


const LeftTimeDisplay = (props) => {

  let [initDays, initHours, initMins, initSecs] = remainTime(props.target);

  const [days, setDays] = useState(initDays);
  const [hours, setHours] = useState(initHours);
  const [mins, setMins] = useState(initMins);
  const [secs, setSecs] = useState(initSecs);

  useEffect(() => {
    let repeat = setInterval(
      () => {
        let [remainDays, remainHour, remainMins, remainSecs] = remainTime(props.target);

        setDays(remainDays);
        setHours(remainHour);
        setMins(remainMins);
        setSecs(remainSecs);
      }, 1000
    );

    return () => {
      clearInterval(repeat);
    }
    
  }, [props.target]);

  return (
    <div className="lefttime-display">
      <DigitalBall digital={days} unit="DAYS" />
      <DigitalBall digital={hours} unit="HOURS" />
      <DigitalBall digital={mins} unit="MINUTES" />
      <DigitalBall digital={secs} unit="SECONDS" />
    </div>
  );
};

export default LeftTimeDisplay;
