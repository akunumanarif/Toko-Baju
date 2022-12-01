import Chart from "../../components/charts/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../data/dummyData";
import WidgetSmall from "../../components/widgets/widgetSmall/WidgetSmall";
import WidgetLarge from "../../components/widgets/widgetLarge/WidgetLarge";
import React, { useState, useEffect, useMemo } from "react";
import { userRequest } from "../../requestMethods";

export default function Home() {
  const [userStats, setUserStats] = useState([]);
  const MONTH = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getUserStats = async () => {
      try {
        const res = await userRequest.get("/user/stats");
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTH[item._id], "Active User": item.total },
          ])
        );
      } catch (error) {}
    };
    getUserStats();
  }, [MONTH]);
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active Users"
      />
      <div className="homeWidgets">
        <WidgetSmall>Small</WidgetSmall>
        <WidgetLarge>Large</WidgetLarge>
      </div>
    </div>
  );
}
