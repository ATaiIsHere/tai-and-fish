import DigitalBall from "./DigitalBall";

const LeftTimeDisplay = (props) => {
  return (
    <div className="lefttime-display">
      <DigitalBall digital={999} unit="DAYS" />
      <DigitalBall digital={59} unit="HOURS" />
      <DigitalBall digital={59} unit="MINUTES" />
      <DigitalBall digital={59} unit="SECONDS" />
    </div>
  );
};

export default LeftTimeDisplay;
