import React, { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  classes?: string;
}

const Section: React.FC<SectionProps> = ({ children, classes }) => {
  return <section className={classes}>{children}</section>;
};

export default Section;
