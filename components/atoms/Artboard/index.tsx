import React, { ReactNode } from "react";

interface ArtboardProps {
  children: ReactNode;
  classes?: string;
}

const Artboard: React.FC<ArtboardProps> = ({ children, classes }) => {
  return (
    <div className={`p-[16px] h-screen max-w-[1440px] mx-auto my-0`}>
      <section
        className={`${classes} flex flex-col bg-white rounded-sm w-full h-auto`}
      >
        {children}
      </section>
    </div>
  );
};

export default Artboard;
