import "./widgetLarge.css";

export default function WidgetLarge() {
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
          <tr className="widgetLargeUser">
            <td className="widgetLargeSecondHeader">
              <img
                src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="widgetUserImage"
              />
              <span>Susan Antonov</span>
            </td>
            <td className="widgetLargeDate">Jun 20 2021</td>
            <td className="widgetLargeAmount">$220000</td>
            <td className="widgetLargeStatus">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetLargeUser">
            <td className="widgetLargeSecondHeader">
              <img
                src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="widgetUserImage"
              />
              <span>Susan Antonov</span>
            </td>
            <td className="widgetLargeDate">Jun 20 2021</td>
            <td className="widgetLargeAmount">$220000</td>
            <td className="widgetLargeStatus">
              <Button type="Pending" />
            </td>
          </tr>
          <tr className="widgetLargeUser">
            <td className="widgetLargeSecondHeader">
              <img
                src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="widgetUserImage"
              />
              <span>Susan Antonov</span>
            </td>
            <td className="widgetLargeDate">Jun 20 2021</td>
            <td className="widgetLargeAmount">$220000</td>
            <td className="widgetLargeStatus">
              <Button type="Declined" />
            </td>
          </tr>
          <tr className="widgetLargeUser">
            <td className="widgetLargeSecondHeader">
              <img
                src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="widgetUserImage"
              />
              <span>Susan Antonov</span>
            </td>
            <td className="widgetLargeDate">Jun 20 2021</td>
            <td className="widgetLargeAmount">$220000</td>
            <td className="widgetLargeStatus">
              <Button type="Approved" />
            </td>
          </tr>
        </thead>
      </table>
    </div>
  );
}
