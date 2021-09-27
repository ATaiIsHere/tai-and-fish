const DigitalBall = (props) => {
  return (
    <div className="digital-ball">
      <div>{props.digital}</div>
      <div>{props.unit}</div>
    </div>
  );
};

export default DigitalBall;
