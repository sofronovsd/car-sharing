import React from "react";

const StepThree = () => {
  return (
    <div className="addition-container">
      <form>
        <label>Цвет</label>
        <div>
          <input type="radio" name="color" id="colorOption1" defaultChecked />
          <label htmlFor="colorOption1">Любой</label>
          <input type="radio" name="color" id="colorOption2" />
          <label htmlFor="colorOption2">Красный</label>
          <input type="radio" name="color" id="colorOption3" />
          <label htmlFor="colorOption3">Голубой</label>
        </div>
      </form>
    </div>
  );
};

export default StepThree;
