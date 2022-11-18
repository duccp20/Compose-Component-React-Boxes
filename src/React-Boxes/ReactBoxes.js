import React from "react";
import Button from "./Button";
import Input from "./Input";
import Text from "./Text";

const ReactBoxes = () => {
  const objButton = {
    text: "This is Button",
    type: "button",
    onClick: () => alert("XX"),
  };

  return (
    <div>
      <Button {...objButton}></Button>
      <br />
      <br />
      <Input type={"type"} placeholder={"placeholder"}></Input>
      <br />
      <br />
      <Text des={"This is text"} color="red"></Text>
    </div>
  );
};

export default ReactBoxes;
