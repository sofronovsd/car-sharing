import React, { useEffect, useState } from "react";
import "./admin-cities-table.scss";
import { useSelector } from "react-redux";
import { accessTokenSelector } from "../../store/selectors";
import { getCities } from "../../api/api-factory";
import Pagination from "../pagination/pagination";
import { useHistory } from "react-router-dom";
import ICity from "../../store/interfaces/i-city";

const limit = 5;

const AdminCitiesTable = () => {
  const accessToken = useSelector(accessTokenSelector);
  const [cities, setCities] = useState([] as ICity[]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const history = useHistory();

  useEffect(() => {
    getCities(accessToken, limit, currentPage)
      .then((res) => {
        setCities(res.data);
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
      </div>
      {cities.map((city) => {
        return (
          <div className="admin-table_row">
            <div>{city.name}</div>
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

export default AdminCitiesTable;
