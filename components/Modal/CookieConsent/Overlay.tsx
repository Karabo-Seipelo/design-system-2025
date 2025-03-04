interface OverLayProps {
  children: React.ReactNode;
}

const Overlay: React.FC<OverLayProps> = ({ children }) => {
  return (
    <div className="fixed inset-0 z-10 w-screen overflow-y-auto backdrop-blur-sm">
      {children}
    </div>
  );
};

export default Overlay;
