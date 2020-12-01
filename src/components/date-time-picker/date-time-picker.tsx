import React, { useCallback } from "react";
import Datetime from "react-datetime";
import "./date-time-picker.scss";
import { useDispatch, useSelector } from "react-redux";
import { setDateFrom, setDateTo } from "../../store/actions";
import { OrderState } from "../../store/orderReducer";
import { Moment } from "moment";

interface DateTimePickerState {
  order: OrderState;
}

const dateFromSelector = (state: DateTimePickerState) => state.order.dateFrom;
const dateToSelector = (state: DateTimePickerState) => state.order.dateTo;

const DateTimePicker = () => {
  const dispatch = useDispatch();
  const startDate = useSelector(dateFromSelector);
  const endDate = useSelector(dateToSelector);

  const handleChangeStartDate = useCallback(
    (date: string | Moment) => {
      dispatch(setDateFrom(date));
    },
    [dispatch]
  );

  const handleChangeEndDate = useCallback(
    (date: string | Moment) => {
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
