import {useState} from "react";
import "./mindBox.css";

export const MindBox = ({
  _no = "",
  _title1 = "",
  _target = "",
  _title2 = "",
  _discription = "",
}:{
  _no: string;
  _title1: string;
  _target: string;
  _title2: string;
  _discription: string;
}) => {
  const [styleColor,setStyleColor] = useState("");

  const click = () => {
    setStyleColor("red");
  }
  
  return (
    <article className="mindBox">
      <div className="no" onClick={click}>{_no}</div>
      <h3>{_title1}<span className={styleColor}>{_target}</span>{_title2}</h3>
      <p>{_discription}</p>
    </article>
  )
}