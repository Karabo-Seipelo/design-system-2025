import React, { ReactNode } from "react";

interface ArtboardProps {
  children?: ReactNode;
  classes?: string;
}

const Artboard: React.FC<ArtboardProps> = ({ children, classes }) => {
  return (
    <main className="mx-auto min-h-auto max-w-[1440px] p-4">
      <section
        className={`shadow-sm md:shadow-md lg:shadow-lg rounded-md bg-white ${classes}`}
      >
        {children}
      </section>
    </main>
  );
};

export default Artboard;
