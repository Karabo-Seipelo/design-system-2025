import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  classes?: string;
}

const Container: React.FC<ContainerProps> = ({ children, classes }) => {
  return (
    <div
      className={`mx-auto my-0 min-h-auto max-w-[1440px] p-[16px] ${classes}`}
    >
      {children}
    </div>
  );
};

export default Container;
