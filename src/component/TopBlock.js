import LeftTimeDisplay from "./LeftTimeDisplay";
import logo from "../img/logo.svg";

const TopBlock = () => {
  return (
    <div className="top-block">
        <img className="logo" src={logo} alt="logo" />
        <h1 className="block-title white-text">{"ATai & Fish"}</h1>
        <h2 className="block-text white-text">We Are Getting Married</h2>
        <LeftTimeDisplay />
    </div>
  );
}

export default TopBlock;
