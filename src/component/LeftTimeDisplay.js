import { useEffect, useState } from "react";
import DigitalBall from "./DigitalBall";



const LeftTimeDisplay = (props) => {

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);

  useEffect(() => {
    console.log(secs);
    let repeat = setInterval(
      () => {
        let now = new Date();
        let remainSeconds = (props.target.getTime() - now.getTime()) / 1000;

        let remainDays = Math.floor(remainSeconds / 86400);
        let remainHour = Math.floor(remainSeconds % 86400 / 3600);
        let remainMins = Math.floor(remainSeconds % 3600 / 60);
        let remainSecs = Math.floor(remainSeconds % 60);

        setDays(remainDays);
        setHours(remainHour);
        setMins(remainMins);
        setSecs(remainSecs);
      }, 1000
    );

    return () => {
      clearInterval(repeat);
    }
    
  }, []);

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
