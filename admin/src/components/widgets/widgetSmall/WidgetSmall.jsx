import { Visibility } from "@material-ui/icons";
import "./widgetSmall.css";
import { useState, useEffect } from "react";
import { userRequest } from "../../../requestMethods";

export default function WidgetSmall() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await userRequest.get("/user/all/?new=true");
        setUser(res.data);
      } catch (error) {
        console.log("Login dulu");
      }
    };
    getUser();
  }, []);
  return (
    <div className="widgetSmall">
      <div className="widgetSmallTitle">New Join Member</div>
      <ul className="widgetSmallList">
        {users.map((user) => (
          <li className="widgetSmallListItem" key={user._id}>
            <img
              src={
                user.img ||
                "https://img.favpng.com/25/13/19/samsung-galaxy-a8-a8-user-login-telephone-avatar-png-favpng-dqKEPfX7hPbc6SMVUCteANKwj.jpg"
              }
              alt=""
              className="widgetSmallImg"
            />
            <div className="widgetSmallUser">
              <span className="widgetSmallUserName">{user.username}</span>
              <span className="widgetSmallUserTitle">
                {user.isAdmin ? "Admin" : "User"}
              </span>
            </div>
            <button className="widgetSmallButton">
              <Visibility className="widgetSmallButtonIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
