import React, { useContext, useState } from "react";

import { Button, Input, Form, Divider } from "antd";
import {
  InfoCircleOutlined,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";

import "./Login.css";
import UserContext from "../../context/UserContext";
import { Redirect } from "react-router-dom";

export const Login = () => {
  const userContext = useContext(UserContext);
  const [loadSubmit, setLoadSubmit] = useState(false);

  const submit = () => {
    setLoadSubmit(true);
    setTimeout(() => {
      setLoadSubmit(false);
      userContext.setLogged(true);
    }, 1000);
  };

  if (userContext.logged) return <Redirect to="/inicio" />;

  return (
    <div className="Login">
      <div className="content">
        <div className="cover"></div>
        <div className="login">
          <div className="form">
            <h1>HOTEL HARRISON</h1>
            <Form layout="vertical">
              <Form.Item label="Usuario:" required>
                <Input
                  prefix={<UserOutlined />}
                  size="large"
                  placeholder="Ingrese su usuario"
                />
              </Form.Item>
              <Form.Item label="Contraseña:" required>
                <Input.Password
                  prefix={<LockOutlined />}
                  size="large"
                  placeholder="Ingrese su contraseña"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  loading={loadSubmit}
                  onClick={submit}
                  type="primary"
                  htmlType="submit"
                  size="large"
                  block
                >
                  Iniciar Sesión
                </Button>
              </Form.Item>
            </Form>
            <Divider>
              <InfoCircleOutlined />
            </Divider>
            <p>
              Sistema <b>Hotelero</b> para la <b>Reserva y Recepción</b> de
              habitaciones de la empresa <b>HARRISON</b>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
