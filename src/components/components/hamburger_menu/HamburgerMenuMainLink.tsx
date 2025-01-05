import React, { useContext } from "react";
import "./hamburgerMenuMainLink.css";
import { useNavigate } from "react-router-dom";
import { RootContext } from "../../providers/RootProviders";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HamburgerMenuMainLink = ({
  _icon,
  _title = "",
  _subtitle = "",
  _link = "",
}: {
  _icon: IconDefinition,
  _title: string,
  _subtitle: string,
  _link: string,
}) => {
  const navigate = useNavigate();
  const { hamburgerMenuState, setHamburgerMenuState } = useContext(RootContext);
  const linkBoxClickHandler = () => {
    if (hamburgerMenuState) {
      setHamburgerMenuState(false);
      navigate(_link);
    }
  };
  return (
    <li className="hamburgerMenuMainLink" onClick={linkBoxClickHandler}>
      <div className="icon">
        <FontAwesomeIcon icon={_icon} size="3x" color="white" />
      </div>
      <dl>
        <dt>{ _title }</dt>
        <dd>{ _subtitle }</dd>
      </dl>
    </li>
  );
};
