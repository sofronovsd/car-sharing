import React from "react";
import Header from "../../header/header";
import "./order-page.scss";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import StepOne from "../../step-one/step-one";
import OrderDetails from "../../order-details/order-details";
import StepTwo from "../../step-two/step-two";
import StepThree from "../../step-three/step-three";

const OrderPage = () => {
  return (
    <div className="order-page-container">
      <Header />
      <Tabs>
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
              disabled={false}
            >
              Модель
            </Tab>
            <Tab
              className="tab-button link"
              disabled={false}
              disabledClassName="link__disabled"
              selectedClassName="link__accent"
            >
              Дополнительно
            </Tab>
            <Tab
              className="tab-button link"
              disabled={true}
              disabledClassName="link__disabled"
              selectedClassName="link__accent"
            >
              Итого
            </Tab>
          </TabList>
        </div>
        <TabPanel className="react-tabs__tab-panel">
          <main className="order-container">
            <StepOne />
            <OrderDetails />
          </main>
        </TabPanel>
        <TabPanel>
          <main className="order-container">
            <StepTwo />
            <OrderDetails />
          </main>
        </TabPanel>
        <TabPanel>
          <main className="order-container">
            <StepThree />
            <OrderDetails />
          </main>
        </TabPanel>
        <TabPanel>content for tab #4</TabPanel>
      </Tabs>
    </div>
  );
};

export default OrderPage;
