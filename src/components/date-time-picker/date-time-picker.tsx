import React, { useCallback, useState } from "react";
import Datetime from "react-datetime";
import "./date-time-picker.scss";
import { useDispatch } from "react-redux";
import { setDateFrom, setDateTo } from "../../store/actions";

const DateTimePicker = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const handleChangeStartDate = useCallback(
    (date: any) => {
      setStartDate(date);
      dispatch(setDateFrom(date));
    },
    [dispatch]
  );

  const handleChangeEndDate = useCallback(
    (date: any) => {
      setEndDate(date);
      dispatch(setDateTo(date));
    },
    [dispatch]
  );

  return (
    <div className="date-time-picker_container">
      <label>Дата аренды</label>
      <div className="date-time-picker">
        <div>
          <label htmlFor="stateDate">С</label>
          <Datetime
            value={startDate}
            onChange={handleChangeStartDate}
            dateFormat="DD.MM.YYYY"
            timeFormat="HH:mm"
            inputProps={{ placeholder: "Введите дату и время" }}
          />
        </div>
        <div>
          <label htmlFor="endDate">По</label>
          <Datetime
            value={endDate}
            onChange={handleChangeEndDate}
            dateFormat="DD.MM.YYYY"
            timeFormat="HH:mm"
            inputProps={{ placeholder: "Введите дату и время" }}
          />
        </div>
      </div>
    </div>
  );
};

export default DateTimePicker;
