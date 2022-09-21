import React, { useState } from "react";

const Button = ({ increase, decrease }) => {
  return (
    <>
      <button onClick={decrease}>prev</button>
      <button onClick={increase}>next</button>
    </>
  );
};

export default Button;
