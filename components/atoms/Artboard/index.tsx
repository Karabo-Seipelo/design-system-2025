import React, { ReactNode } from "react";
import classNames from "classnames";

interface ArtboardProps {
  children?: ReactNode;
  classes?: string;
}

const Artboard: React.FC<ArtboardProps> = ({ children, classes }) => {
  const layoutClasses = classNames(
    "mx-auto min-h-auto max-w-[1440px]",
    "shadow-sm md:shadow-md lg:shadow-lg",
    "rounded-md bg-white",
  );
  return (
    <main className="min-h-screen p-4">
      <div className={layoutClasses}>
        <section className={`${classes}`}>{children}</section>
      </div>
    </main>
  );
};

export default Artboard;
