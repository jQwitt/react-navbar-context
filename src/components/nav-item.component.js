import React, { useContext } from "react";
import NavContext from "../nav.context";

export default function NavItem(props) {
  const { ctx, setCtx } = useContext(NavContext);

  const updateContext = () => {
    let _theme = ctx.theme;
    if (props.toggleTheme) {
      _theme = ctx.theme === "dark" ? "light" : "dark";
    }
    let _open = props.children ? !ctx.open : ctx.open;
    setCtx({ theme: _theme, open: _open });
  };

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => updateContext()}>
        {props.icon}
      </a>
      {ctx.open ? props.children : null}
    </li>
  );
}
