import LeftTimeDisplay from "./LeftTimeDisplay";

const TopBlock = () => {
  return (
    <div className="top-block">
        <h1 className="block-title white-text">{"Tai & Fish"}</h1>
        <h2 className="block-text white-text">We Are Getting Married</h2>
        <LeftTimeDisplay />
    </div>
  );
}

export default TopBlock;
