import React, { ReactNode } from "react";
import classNames from "classnames";

interface ArtboardProps {
  children?: ReactNode;
  classes?: string;
}

const Artboard: React.FC<ArtboardProps> = ({ children }) => {
  const layoutClasses = classNames(
    "min-h-[calc(100vh_-_32px)] rounded-md bg-white",
    "shadow-sm md:shadow-md lg:shadow-lg"
  );
  return (
    <main className="mx-auto min-h-screen max-w-[1440px] p-4">
      <div className={layoutClasses}>{children}</div>
    </main>
  );
};

export default Artboard;
