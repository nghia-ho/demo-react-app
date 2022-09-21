import React from "react";

const IntroComponent = () => {
  return (
    <div>
      <h1 className="name">Nguyen Hoan Nghia</h1>
      <h2>oral test</h2>
      <h2>{new Date().toLocaleString()}</h2>
    </div>
  );
};

export default IntroComponent;
