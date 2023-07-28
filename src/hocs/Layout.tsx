// React
import { Fragment, ReactNode } from "react";
import { Header } from "../components/Footer";

// Components


type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <Fragment>
    
    <div>{children}</div>
    <Header/>
  </Fragment>
);

export default Layout;
