const DigitalBall = (props) => {
  return (
    <div
      className="digital-ball"
      // style={{ display: props.digital || props.keep ? "inherit" : "none" }}
    >
      <div>{props.digital}</div>
      <div>{props.unit}</div>
    </div>
  );
};

export default DigitalBall;
