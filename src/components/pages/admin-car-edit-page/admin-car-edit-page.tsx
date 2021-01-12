import React, { ChangeEvent, useCallback, useState } from "react";
import "./admin-car-edit-page.scss";
import CustomInput from "../../admin/custom-input/custom-input";

const AdminCarEditPage = () => {
  const [modelName, setModelName] = useState("");
  const [modelType, setModelType] = useState("");

  const handleModelNameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setModelName(e.target.value);
    },
    []
  );
  const handleModelTypeChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setModelType(e.target.value);
    },
    []
  );
  return (
    <div className="admin-page_container">
      <h1 className="admin-page_header">Карточка автомобиля</h1>
      <div className="admin-car-edit-page_container">
        <div className="admin-car-edit-page_card admin-car-edit-page_card__left">
          <h3>картинка</h3>
          <div className="admin-car-edit-page_progress">
            <div>
              <h4>Заполнено</h4>
              <h4>{77}%</h4>
            </div>
            <progress value={77} max={100}></progress>
          </div>
          <div className="admin-car-edit-page_description">
            <h5>Описание</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              eaque, quidem, commodi soluta qui quae quod dolorum sint alias,
              possimus illum assumenda eligendi cumque?
            </p>
          </div>
        </div>
        <div className="admin-car-edit-page_card admin-car-edit-page_card__right">
          <h3 className="admin-car-edit-page_header">Настройки автомобиля</h3>
          <div className="admin-car-edit-page_inputs">
            <CustomInput
              label="Модель автомобиля"
              type="text"
              value={modelName}
              onValueChange={handleModelNameChange}
            />
            <CustomInput
              label="Тип автомобиля"
              type="text"
              value={modelType}
              onValueChange={handleModelTypeChange}
              isError={!modelType}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCarEditPage;
