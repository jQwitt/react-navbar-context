import React from "react";

export default function Navbar(props) {
  return (
    <nav className={"navbar " + props.className}>
      <ul className="navbar-nav">{props.children.map((c) => c)}</ul>
    </nav>
  );
}
