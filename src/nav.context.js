import React from "react";

const NavContext = React.createContext({
  ctx: { theme: "dark", open: false },
  setCtx: () => {},
});

export default NavContext;
