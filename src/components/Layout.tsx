import { type PropsWithChildren } from "react";
import Footer from "./Footer";
import Nav from "./Nav";

type LayoutProps = {
  any?: string;
};

const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <header className="sticky top-0 z-50 w-full">
        <Nav />
      </header>
      <main className="grow w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
