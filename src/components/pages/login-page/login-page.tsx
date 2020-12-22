import React, { ChangeEvent, useCallback, useState } from "react";
import "./login-page.scss";
import CustomInput from "../../admin/custom-input/custom-input";
import { login } from "../../../api/api-factory";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticate } from "../../../store/actions";
import { AuthState } from "../../../store/authReducer";

const LoginPage = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleMailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value);
  }, []);

  const handlePasswordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );

  const handleLogin = useCallback(() => {
    if (mail && password) {
      login(mail, password).then((res) => {
        const newAuth = {
          accessToken: res.access_token,
          userId: res.user_id,
          tokenType: res.token_type,
          refreshToken: res.refresh_token,
          expiresIn: res.expires_in,
          isAuthenticated: true,
        } as AuthState;
        dispatch(authenticate(newAuth));
        history.push(`/car-sharing/admin/orders`);
      });
    }
  }, [dispatch, history, mail, password]);
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
            <a href="#">Запросить доступ</a>
            <button className="button" onClick={handleLogin}>
              Войти
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
