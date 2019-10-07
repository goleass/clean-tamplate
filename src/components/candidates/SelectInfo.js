import React from "react";
import {
  Col,
  FormSelect
} from "shards-react";

const SelectInfo = () => (
  <Col>
    <FormSelect
      size="sm"
      value="last-week"
      style={{ maxWidth: "130px" }}
      onChange={() => {}}
    >
      <option selected value="todos">Todas as áreas </option>
      <option value="today">Desenvovimeto</option>
      <option value="last-month">Recursos Humanos</option>
      <option value="last-year">Administração</option>
    </FormSelect>
  </Col>
  
);

export default SelectInfo;