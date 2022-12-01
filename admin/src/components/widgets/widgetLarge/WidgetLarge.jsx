import "./widgetLarge.css";
import { useState, useEffect } from "react";
import { userRequest } from "../../../requestMethods";

export default function WidgetLarge() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("/order/all");
        setOrders(res.data);
      } catch (error) {
        console.log("Login dulu");
      }
    };
    getOrders();
  }, []);
  const Button = ({ type }) => {
    return <button className={"widgetLargeButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLarge">
      <div className="widgetLargeTitle">Latest Transactions</div>
      <table className="widgetLargeTable">
        <thead>
          <tr className="widgetLargeHeaderTitle">
            <th className="widgetLargeTableHeader">Customer</th>
            <th className="widgetLargeTableHeader">Date</th>
            <th className="widgetLargeTableHeader">Amount</th>
            <th className="widgetLargeTableHeader">Status</th>
          </tr>
          {orders.map((order) => (
            <tr className="widgetLargeOrders" key={order._id}>
              <td className="widgetLargeSecondHeader">
                <span>{order.userId}</span>
              </td>
              <td className="widgetLargeDate">{order.createdAt}</td>
              <td className="widgetLargeAmount">$ {order.amount}</td>
              <td className="widgetLargeStatus">
                <Button type={order.status} />
              </td>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
}
