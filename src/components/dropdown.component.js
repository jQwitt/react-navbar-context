import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { CogIcon, ChevronIcon, ArrowIcon } from "../icons";

export default function DropDown(props) {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  const calcHeight = (el) => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  };

  const DropDownItem = (props) => {
    return (
      <a
        href="#"
        className="dropdown-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        <p>{props.children}</p>
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  };

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropDownItem>My Profile</DropDownItem>
          <DropDownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings"
          >
            Settings
          </DropDownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropDownItem leftIcon={<ArrowIcon />} goToMenu="main" />
          <DropDownItem>Name</DropDownItem>
          <DropDownItem>Password</DropDownItem>
          <DropDownItem>Friends</DropDownItem>
          <DropDownItem>History</DropDownItem>
          <DropDownItem>Order</DropDownItem>
          <DropDownItem>Logout</DropDownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
