import React from "react";

interface OrderDetailsRowProps {
  label: string;
  value: string;
}

const OrderDetailsRow = ({ label, value }: OrderDetailsRowProps) => {
  return (
    <div className="order-details_row">
      <span>{label}</span>
      <div />
      <div className="order-details_value">
        <span>{value}</span>
      </div>
    </div>
  );
};

export default OrderDetailsRow;
