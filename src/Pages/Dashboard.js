import "../Components/Components_Styles/Margin_pages.css";
import Cards from "../Components/Small_Chart_Teacher";
import S_Cards from "../Components/Small_Chart_Student";
import A_Cards from "../Components/Small_Chart_Admin";
import Charts from "../Components/Graph";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const loginType = useSelector((state) => state.loginReducer.role_name);

  return (
    <>
      {loginType === "admin" || loginType === "Admin" ? (
        <div className="margin-all">
          <div className="cards-inline">
            <div style={{ padding: "30px" }}>
              <Cards />
            </div>
            <div style={{ padding: "30px" }}>
              <S_Cards />
            </div>
            <div style={{ padding: "30px" }}>
              <A_Cards />
            </div>
          </div>
        </div>
      ) : loginType === "Teacher" || loginType === "teacher" ? (
        <div className="margin-all">
          <img src="https://ieltsfever.org/wp-content/uploads/2021/03/IELTSFever-FREE-Online-Test-Day-79.jpg" />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Dashboard;
