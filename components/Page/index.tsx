export interface PageProps {
  children: React.ReactNode;
  classes?: string;
}

const Page: React.FC<PageProps> = ({ classes = "", children }) => {
  return <div className={`${classes} max-w-[1440px] mx-auto`}>{children}</div>;
};

export default Page;
