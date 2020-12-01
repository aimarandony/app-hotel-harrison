import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

import "./Layout.css";

export const Layout = ({ children }) => {
  const userContext = useContext(UserContext);

  if (!userContext.logged) return <>{children}</>;

  return (
    <div className="Layout">
      <Sidebar />
      <div className="right">
        <Header />
        <div className="content-app">
          <div className="container">{children}</div>
        </div>
      </div>
    </div>
  );
};
