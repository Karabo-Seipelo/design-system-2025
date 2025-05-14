export interface PageProps {
  children: React.ReactNode;
  className?: string;
}

const Page: React.FC<PageProps> = ({ className = "", children }) => {
  return (
    <div data-testid="page" className={`${className} max-w-[1440px] mx-auto`}>
      {children}
    </div>
  );
};

export default Page;
