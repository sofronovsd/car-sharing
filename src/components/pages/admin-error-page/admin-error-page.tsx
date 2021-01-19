import React, { useCallback } from "react";
import "./admin-error-page.scss";
import { useHistory } from "react-router-dom";

const AdminErrorPage = () => {
  const history = useHistory();

  const handleButtonClick = useCallback(() => {
    history.goBack();
  }, [history]);
  return (
    <div className="error-page">
      <h1>500</h1>
      <h2>Что то пошло не так</h2>
      <h3>Попробуйте перезагрузить страницу</h3>
      <button className="button-adm" onClick={handleButtonClick}>
        Назад
      </button>
    </div>
  );
};

export default AdminErrorPage;
