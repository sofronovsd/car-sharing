import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { ModelState } from "../../store/modelReducer";
import "./color-picker.scss";

interface ColorPickerProps {
  handleChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface StepThreeState {
  model: ModelState;
}

const modelSelector = (state: StepThreeState) => state.model.model;

const ColorPicker = ({ handleChangeValue }: ColorPickerProps) => {
  const model = useSelector(modelSelector);

  const colorOptions = useMemo(() => {
    const colors = model.colors;
    const id = "100";
    const colorOptionsTemplate = [
      <React.Fragment key={id}>
        <input type="radio" className="custom-radio" name="color" id={id} />
        <label htmlFor={id}>Любой</label>
      </React.Fragment>,
    ];
    return colorOptionsTemplate.concat(
      colors.map((color, index) => {
        const id = index.toString();
        return (
          <React.Fragment key={id}>
            <input type="radio" className="custom-radio" name="color" id={id} />
            <label htmlFor={id}>{color}</label>
          </React.Fragment>
        );
      })
    );
  }, [model]);

  return (
    <div className="color-picker_container">
      <label>Цвет</label>
      <div className="color-picker" onChange={handleChangeValue}>
        {colorOptions}
      </div>
    </div>
  );
};

export default ColorPicker;
