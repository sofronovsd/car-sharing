import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./step-three.scss";

const StepThree = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  return (
    <div className="addition-container">
      <form>
        <div className="form-item_container">
          <label>Цвет</label>
          <div>
            <input
              type="radio"
              className="custom-radio"
              name="color"
              id="colorOption1"
              defaultChecked
            />
            <label htmlFor="colorOption1">Любой</label>
            <input
              type="radio"
              className="custom-radio"
              name="color"
              id="colorOption2"
            />
            <label htmlFor="colorOption2">Красный</label>
            <input
              type="radio"
              className="custom-radio"
              name="color"
              id="colorOption3"
            />
            <label htmlFor="colorOption3">Голубой</label>
          </div>
        </div>
        <div className="form-item_container">
          <label>Дата аренды</label>
          <div className="date-picker-container">
            <div>
              <label htmlFor="stateDate">С</label>
              <DatePicker
                selected={startDate}
                onChange={(date: any) => setStartDate(date)}
                id="stateDate"
                placeholderText="Введите дату и время"
              />
            </div>
            <div>
              <label htmlFor="endDate">По</label>
              <DatePicker
                selected={endDate}
                onChange={(date: any) => setEndDate(date)}
                id="endDate"
                placeholderText="Введите дату и время"
              />
            </div>
          </div>
        </div>
        <div className="form-item_container">
          <label>Тариф</label>
          <div className="rate-container">
            <div>
              <input
                type="radio"
                className="custom-radio"
                name="rate"
                id="rate1"
                defaultChecked
              />
              <label htmlFor="rate1">Поминутно, 7₽/мин</label>
            </div>
            <div>
              <input
                type="radio"
                className="custom-radio"
                name="rate"
                id="rate2"
              />
              <label htmlFor="rate2">На сутки, 1999 ₽/сутки</label>
            </div>
          </div>
        </div>
        <div className="form-item_container">
          <label>Доп услуги</label>
          <div className="rate-container">
            <div>
              <input
                type="checkbox"
                name="service1"
                id="service1"
                className="custom-checkbox"
                defaultChecked
              />
              <label htmlFor="service1">Полный бак, 500р</label>
            </div>
            <div>
              <input
                type="checkbox"
                className="custom-checkbox"
                name="service2"
                id="service2"
              />
              <label htmlFor="service2">Детское кресло, 200р</label>
            </div>
            <div>
              <input
                type="checkbox"
                className="custom-checkbox"
                name="service3"
                id="service3"
              />
              <label htmlFor="service3">Правый руль, 1600р</label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StepThree;
