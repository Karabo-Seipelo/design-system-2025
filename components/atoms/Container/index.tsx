import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  classes?: string;
}

const Container: React.FC<ContainerProps> = ({ children, classes }) => {
  return (
    <div className={`h-screen max-w-[1440px] mx-auto my-0 ${classes}`}>
      {children}
    </div>
  );
};

export default Container;
