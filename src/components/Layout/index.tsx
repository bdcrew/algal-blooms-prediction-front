import { PropsWithChildren } from "react";

type LayoutProps = PropsWithChildren;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-full flex flex-col items-center p-4">{children}</div>
  );
};

export default Layout;
