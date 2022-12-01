import { ArrowDownwardSharp, ArrowUpward } from "@material-ui/icons";
import "./featuredInfo.css";
import React, { useState, useEffect } from "react";
import { userRequest } from "../../requestMethods";
export default function FeaturedInfo() {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);
  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("/order/incomes");
        setIncome(res.data);
        // console.log(res.data);
        setPerc((res.data[1].total * 100) / res.data[0].total - 100);
      } catch (error) {}
    };
    getIncome();
  }, []);

  //   console.log(income[1]);
  return (
    <div className="featuredInfo">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            $ {income[1]?.total || "Wait ..."}
          </span>
          <span className="featuredMoneyRate">
            {Math.floor(perc)}%
            {perc < 0 ? (
              <ArrowDownwardSharp className="featuredIcon negative" />
            ) : (
              <ArrowUpward className="featuredIcon" />
            )}
          </span>
        </div>
        <span className="featuredSub">Compare Last Month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$12.400</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compare Last Month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney negative">$6.400</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowDownwardSharp className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compare Last Month</span>
      </div>
    </div>
  );
}
