import React, { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
  classes?: string;
}

const Main: React.FC<MainProps> = ({ children, classes }) => {
  return <section className={classes}>{children}</section>;
};

export default Main;
