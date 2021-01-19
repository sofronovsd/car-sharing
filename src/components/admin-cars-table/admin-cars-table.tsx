import React, { useCallback, useEffect, useState } from "react";
import "./admin-cars-table.scss";
import { useSelector } from "react-redux";
import { accessTokenSelector } from "../../store/selectors";
import { getCars } from "../../api/api-factory";
import ICar from "../../store/interfaces/i-car";
import Pagination from "../pagination/pagination";
import { useHistory } from "react-router-dom";

const limit = 5;

const AdminCarsTable = () => {
  const accessToken = useSelector(accessTokenSelector);
  const [cars, setCars] = useState([] as ICar[]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const history = useHistory();

  const handleCarClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const target = event.target as HTMLDivElement;
      const carRow = target.closest(".admin-table_row");

      history.push(`/admin/cars/${carRow?.id}`);
    },
    [history]
  );

  useEffect(() => {
    getCars(accessToken, limit, currentPage)
      .then((res) => {
        setCars(res.data);
        setTotalRecords(res.count);
      })
      .catch(() => {
        history.push("/admin/error");
      });
  }, [accessToken, currentPage, history]);

  return (
    <div className="admin-table">
      <div className="admin-table_row admin-table_row__headers">
        <div>Название</div>
        <div>Минимальная цена</div>
        <div>Максимальная цена</div>
      </div>
      {cars.map((car) => {
        return (
          <div className="admin-table_row" id={car.id} onClick={handleCarClick}>
            <div>{car.name}</div>
            <div>{car.priceMin}</div>
            <div>{car.priceMax}</div>
          </div>
        );
      })}
      <Pagination
        totalRecords={totalRecords}
        limitRecords={limit}
        neighbourPages={2}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default AdminCarsTable;
