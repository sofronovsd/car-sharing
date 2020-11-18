import React from "react";
import "./step-two.scss";

const StepTwo = () => {
  return (
    <div className="model-container">
      <input type="radio" name="modelType" id="modelOption1" defaultChecked />
      <label htmlFor="modelOption1">Все модели</label>
      <input type="radio" name="modelType" id="modelOption2" />
      <label htmlFor="modelOption2">Эконом</label>
      <input type="radio" name="modelType" id="modelOption3" />
      <label htmlFor="modelOption3">Премиум</label>
      <div className="model-grid">
        <span>car 1</span>
        <span>car 2</span>
        <span>car 3</span>
        <span>car 4</span>
        <span>car 5</span>
        <span>car 6</span>
      </div>
    </div>
  );
};

export default StepTwo;
