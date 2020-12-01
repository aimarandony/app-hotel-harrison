import React from "react";

import "./Sidebar.css";
import LogoNoBg from "../../images/logo-no-bg.svg";
import { NavLink } from "react-router-dom";

import { HomeOutlined, BookOutlined } from "@ant-design/icons";

export const Sidebar = () => {
  return (
    <div className="left">
      <div className="logo">
        <img src={LogoNoBg} alt="Logo Harrison" />
        <h2>Harrison System</h2>
      </div>
      <ul>
        <li>
          <NavLink to="/inicio" activeClassName="active">
            <HomeOutlined /> Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/reserva" activeClassName="active">
            <BookOutlined /> Reserva
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
