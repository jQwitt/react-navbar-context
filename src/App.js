import React, { useState } from "react";
import NavContext from "./nav.context";
import { DropDown, Navbar, NavItem } from "./components";
import {
  BellIcon,
  CaretIcon,
  MessengerIcon,
  PlusIcon,
  BoltIcon,
} from "./icons";

function App() {
  const [ctx, setCtx] = useState({ theme: "dark", open: false });
  const _value = { ctx, setCtx };

  return (
    <NavContext.Provider value={_value}>
      <Navbar className={"" + ctx.theme}>
        <NavItem icon={<BoltIcon />} toggleTheme={true} />
        <NavItem icon={<PlusIcon />} />
        <NavItem icon={<BellIcon />} />
        <NavItem icon={<MessengerIcon />} />
        <NavItem icon={<CaretIcon />}>
          <DropDown></DropDown>
        </NavItem>
      </Navbar>
    </NavContext.Provider>
  );
}

export default App;
