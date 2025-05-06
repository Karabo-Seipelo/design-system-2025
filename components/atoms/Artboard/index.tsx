import React, { ReactNode } from "react";

interface ArtboardProps {
  children?: ReactNode;
  classes?: string;
}

const Artboard: React.FC<ArtboardProps> = ({ children, classes }) => {
  return (
    <main className="mx-auto min-h-screen max-w-[1440px] p-4">
      <section
        className={`shadow-sm md:shadow-md lg:shadow-lg rounded-md bg-white min-h-[calc(100vh_-32px)] ${classes}`}
      >
        {children}
      </section>
    </main>
  );
};

export default Artboard;
