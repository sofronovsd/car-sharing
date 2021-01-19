import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./admin-car-edit-page.scss";
import CustomInput from "../../admin/custom-input/custom-input";
import { useSelector } from "react-redux";
import { accessTokenSelector } from "../../../store/selectors";
import {
  editCarById,
  getCarById,
  loadCarImage,
} from "../../../api/api-factory";
import ICar from "../../../store/interfaces/i-car";
import { useAlert } from "react-alert";

interface AdminCarEditPageParamTypes {
  carId: string;
}

const AdminCarEditPage = () => {
  const accessToken = useSelector(accessTokenSelector);
  const [modelName, setModelName] = useState("");
  const [modelType, setModelType] = useState("");
  const [progress, setProgress] = useState(0);
  const [imgSrc, setImgSrc] = useState("");
  const [car, setCar] = useState({} as ICar);
  const { carId } = useParams<AdminCarEditPageParamTypes>();
  const history = useHistory();
  const alert = useAlert();

  useEffect(() => {
    const totalFields = 2;
    let filledFields = 0;
    if (modelType) {
      filledFields += 1;
    }
    if (modelName) {
      filledFields += 1;
    }
    setProgress(Math.ceil((filledFields / totalFields) * 100));
  }, [modelName, modelType]);

  useEffect(() => {
    if (car) {
      setModelName(car.name);
      setModelType(car.description);

      if (!imgSrc) {
        loadCarImage(car?.thumbnail?.path).then((blob) => {
          setImgSrc(URL.createObjectURL(blob));
        });
      }
    }
  }, [car, imgSrc]);

  useEffect(() => {
    getCarById(accessToken, carId)
      .then((res) => {
        setCar(res.data);
      })
      .catch(() => {
        history.push("/admin/error");
      });
  }, [accessToken, carId, history]);

  const handleSaveClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      editCarById(accessToken, carId, modelName, modelType)
        .then(() => {
          alert.show("Изменения сохранены", { type: "success" });
        })
        .catch(() => {
          alert.show("Ошибка сохранения", { type: "error" });
        });
    },
    [accessToken, alert, carId, modelName, modelType]
  );

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
          <div className="admin-car-edit-page_info">
            <img src={imgSrc} alt="car" />
            <h2>{car.name}</h2>
            <h4>{car.description}</h4>
          </div>
          <div className="admin-car-edit-page_progress">
            <div>
              <h4>Заполнено</h4>
              <h4>{progress}%</h4>
            </div>
            <progress value={progress} max={100} />
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
          <div className="admin-car-edit-page_buttons">
            <div>
              <button className="button-adm" onClick={handleSaveClick}>
                Сохранить
              </button>
              <button className="button-adm button-adm__disabled">
                Отменить
              </button>
            </div>
            <button className="button-adm button-adm__red">Удалить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCarEditPage;
