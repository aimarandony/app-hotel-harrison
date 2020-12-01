import React, { useContext } from "react";
import { Button, Dropdown, Menu } from "antd";
import { DownOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";

import "./Header.css";
import UserContext from "../../context/UserContext";

export const Header = () => {
  const userContext = useContext(UserContext);

  const logout = () => userContext.setLogged(false);

  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<LogoutOutlined />} onClick={logout}>
        Cerrar Sesión
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="Header">
      <Dropdown overlay={menu}>
        <Button type="dashed" size="large">
          <UserOutlined />{" "}
          {userContext.name ? userContext.name : "Aimar Andony"}{" "}
          <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
};
