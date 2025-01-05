import {useState, useEffect, useContext} from "react";
import "./hamburgerButton.css";
import { RootContext } from "../../providers/RootProviders";

export const HamburgerButton = () => {
  const { hamburgerMenuState, setHamburgerMenuState } = useContext(RootContext);
  const [hamburgerButtonStyle,setHamburgerButtonStyle] = useState("close");
  const buttonClickHandler = () => {
    if(hamburgerMenuState){
      setHamburgerButtonStyle("close");
      setHamburgerMenuState(false);
    }
    else{
      setHamburgerButtonStyle("open");
      setHamburgerMenuState(true);
    }
  }
  useEffect(() => {
    if (hamburgerMenuState) {
      setHamburgerButtonStyle("open");
    }
    else {
      setHamburgerButtonStyle("close");
    }
}, [hamburgerMenuState]);
  return (
    <div className="hamburgerButtonWrap">
      <div className={`hamburgerButton ${hamburgerButtonStyle}`} onClick={buttonClickHandler}>
          <span></span>
          <span></span>
          <span></span>
      </div>
    </div>
  );
}