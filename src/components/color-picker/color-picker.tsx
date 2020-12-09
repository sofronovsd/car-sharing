import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { ModelState } from "../../store/modelReducer";
import "./color-picker.scss";
import { OrderState } from "../../store/orderReducer";
import CustomRadio from "../custom-radio/custom-radio";

interface ColorPickerProps {
  handleChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface StepThreeState {
  model: ModelState;
  order: OrderState;
}

const modelSelector = (state: StepThreeState) => state.model.model;
const colorSelector = (state: StepThreeState) => state.order.color;

const ColorPicker = ({ handleChangeValue }: ColorPickerProps) => {
  const model = useSelector(modelSelector);
  const selectedColor = useSelector(colorSelector);

  const colorOptions = useMemo(() => {
    const colors = model.colors;
    const id = "100";
    const colorOptionsTemplate = [
      <React.Fragment key={id}>
        <CustomRadio name="color" id={id} defaultChecked={false} text="Любой" />
      </React.Fragment>,
    ];
    return colorOptionsTemplate.concat(
      colors.map((color, index) => {
        const id = index.toString();
        return (
          <React.Fragment key={id}>
            <CustomRadio
              name="color"
              id={id}
              defaultChecked={selectedColor === color}
              text={color}
            />
          </React.Fragment>
        );
      })
    );
  }, [model.colors, selectedColor]);

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
