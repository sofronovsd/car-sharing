import React, { ChangeEvent, useCallback, useState } from "react";
import "./login-page.scss";
import CustomInput from "../../admin/custom-input/custom-input";

const LoginPage = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleMailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value);
  }, []);

  const handlePasswordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );
  return (
    <div className="login-page_container">
      <div className="login-page">
        <div className="login-page_header">
          <img src="../assets/logo.svg" alt="logo" />
          <h3>Need for drive</h3>
        </div>
        <div className="dialog">
          <h3 className="dialog_header">Вход</h3>
          <form className="dialog_form">
            <CustomInput
              label="Почта"
              type="email"
              value={mail}
              onValueChange={handleMailChange}
            />
            <CustomInput
              label="Пароль"
              type="password"
              value={password}
              onValueChange={handlePasswordChange}
            />
          </form>
          <div className="dialog_button-group">
            <a>Запросить доступ</a>
            <button className="button">Войти</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
