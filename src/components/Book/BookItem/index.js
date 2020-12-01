import React from "react";
import { Card, Tag } from "antd";

import "./BookItem.css";

export const BookItem = () => {
  return (
    <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 p-2">
      <Card style={{ width: '100%' }} hoverable>
        <Tag color="volcano">105 | Por Confirmar</Tag>
        <p className="name">Aimar Andony, Berrocal Coaquira</p>
        <p className="dni">749815465</p>
      </Card>
    </div>
  );
};
