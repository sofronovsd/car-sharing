import React, { useCallback, useEffect, useState } from "react";
import Header from "../../header/header";
import "./order-page.scss";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import StepOne from "../../step-one/step-one";
import OrderDetails from "../../order-details/order-details";
import StepTwo from "../../step-two/step-two";
import StepThree from "../../step-three/step-three";
import StepFour from "../../step-four/step-four";
import { OrderState } from "../../../store/orderReducer";
import { useSelector } from "react-redux";

interface OrderPageState {
  order: OrderState;
}

const stageSelector = (state: OrderPageState) => state.order.stage;

const OrderPage = () => {
  const stage = useSelector(stageSelector);
  const [tabIndex, setTabIndex] = useState(stage - 1);

  useEffect(() => {
    setTabIndex(stage - 1);
  }, [stage]);

  const handleTabSelect = useCallback((index) => {
    setTabIndex(index);
  }, []);
  return (
    <div className="order-page-container">
      <Header />
      <Tabs selectedIndex={tabIndex} onSelect={handleTabSelect}>
        <div className="order-nav-bar-container">
          <TabList className="order-nav-bar">
            <Tab
              className="tab-button link"
              default
              selectedClassName="link__accent"
            >
              Местоположение
            </Tab>
            <Tab
              className="tab-button link"
              selectedClassName="link__accent"
              disabledClassName="link__disabled"
              disabled={stage < 2}
              selected={stage === 2}
            >
              Модель
            </Tab>
            <Tab
              className="tab-button link"
              disabled={stage < 3}
              disabledClassName="link__disabled"
              selectedClassName="link__accent"
              selected={stage === 3}
            >
              Дополнительно
            </Tab>
            <Tab
              className="tab-button link"
              disabled={stage < 4}
              disabledClassName="link__disabled"
              selectedClassName="link__accent"
              selected={stage === 4}
            >
              Итого
            </Tab>
          </TabList>
        </div>
        <TabPanel className="react-tabs__tab-panel">
          <main className="order-container">
            <StepOne />
            <OrderDetails stage={1} />
          </main>
        </TabPanel>
        <TabPanel>
          <main className="order-container">
            <StepTwo />
            <OrderDetails stage={2} />
          </main>
        </TabPanel>
        <TabPanel>
          <main className="order-container">
            <StepThree />
            <OrderDetails stage={3} />
          </main>
        </TabPanel>
        <TabPanel>
          <main className="order-container">
            <StepFour />
            <OrderDetails stage={4} />
          </main>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OrderPage;
