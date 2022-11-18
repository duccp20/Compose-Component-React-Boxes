import React from "react";

const Text = ({ des, color }) => {
  return <span style={{ color: `${color}` }}>{des}</span>;
};

export default Text;
