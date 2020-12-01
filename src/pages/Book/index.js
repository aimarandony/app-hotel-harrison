import React, { useState } from "react";
import { BookList } from "../../components/Book/BookList";
import {
  Form,
  Button,
  Input,
  Row,
  Col,
  Drawer,
  Steps,
  message,
  DatePicker,
  InputNumber,
  Alert,
  Select,
  Radio,
  Divider,
} from "antd";
import {
  FilterOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";

import "./Book.css";

const { Step } = Steps;

const steps = [
  {
    title: "Buscar Habitación",
    content: (
      <div>
        <Form layout="horizontal" labelCol={{ span: 7 }}>
          <Form.Item label="Fecha de Inicio a Fin:">
            <DatePicker.RangePicker />
          </Form.Item>
          <Form.Item label="Número de Camas:">
            <InputNumber min={1} max={10} defaultValue={3} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 7 }}>
            <Button type="default">
              <FilterOutlined /> Filtrar Habitaciones
            </Button>
          </Form.Item>
          <Form.Item label="Elegir Habitación:">
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a person"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Select.Option value="jack">A102 | Familiar</Select.Option>
              <Select.Option value="lucy">B105 | Familiar</Select.Option>
              <Select.Option value="tom">A103 | Premium</Select.Option>
            </Select>
          </Form.Item>
          <Alert
            message="No se encontraron habitaciones disponibles."
            type="warning"
            showIcon
          />
        </Form>
      </div>
    ),
  },
  {
    title: "Agregar Cliente",
    content: (
      <>
        <Radio.Group defaultValue="a" style={{ marginBottom: "15px" }}>
          <Radio.Button value="a">Buscar</Radio.Button>
          <Radio.Button value="b">Registrar</Radio.Button>
        </Radio.Group>
        <Form layout="horizontal">
          <Form.Item label="Buscar por nombre:">
            <Select
              showSearch
              placeholder="Buscar ..."
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Select.Option value="jack">
                74985145 | Jack Jack Casas bravo
              </Select.Option>
              <Select.Option value="lucy">Lucy</Select.Option>
              <Select.Option value="tom">Tom</Select.Option>
            </Select>
          </Form.Item>
        </Form>
        <Alert
          message="Seleccionado: 74985145 | Jack Jack Casas bravo"
          type="success"
          showIcon
        />
        <Form layout="horizontal" labelCol={{ span: 6 }} hidden>
          <Form.Item label="Nombre:">
            <Input disabled />
          </Form.Item>
          <Form.Item label="Apellido:">
            <Input disabled />
          </Form.Item>
          <Form.Item label="Tipo Documento:">
            <Select disabled>
              <Select.Option value="0">DNI</Select.Option>
              <Select.Option value="1">Carnet de Extranjería</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="DNI:">
            <Input disabled />
          </Form.Item>
          <Form.Item label="Correo:">
            <Input disabled />
          </Form.Item>
          <Form.Item label="Celular:">
            <Input disabled />
          </Form.Item>
        </Form>
      </>
    ),
  },
  {
    title: "Confirmar",
    content: (
      <>
        <Divider orientation="left">Resumen Reserva</Divider>
      </>
    ),
  },
];

export const Book = () => {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      <div className="header-page">
        <h3 className="title">Reserva</h3>
        <Button type="primary" size="large" onClick={showDrawer}>
          <PlusOutlined /> Nueva Reserva
        </Button>
      </div>
      <div>
        <Form layout="vertical">
          <Row gutter="20" align="bottom">
            <Col span="4">
              <Form.Item label="DNI:">
                <Input />
              </Form.Item>
            </Col>
            <Col span="8">
              <Form.Item label="Nombres y Apellidos:">
                <Input />
              </Form.Item>
            </Col>
            <Col span="4">
              <Form.Item>
                <Button type="ghost" style={{ width: "100%" }}>
                  <SearchOutlined /> Buscar
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <BookList />
        <Drawer
          title="Nueva Reserva"
          placement="right"
          closable={false}
          width={600}
          onClose={onClose}
          visible={visible}
        >
          <Steps direction="horizontal" current={current}>
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <div className="steps-content">{steps[current].content}</div>
          <div className="steps-action" style={{ textAlign: "right" }}>
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Siguiente
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                onClick={() => message.success("Reserva Realizada")}
              >
                Reservar
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                Anterior
              </Button>
            )}
          </div>
        </Drawer>
      </div>
    </div>
  );
};
