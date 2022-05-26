import "../Components/Components_Styles/Margin_pages.css";
import Cards from "../Components/Small_Chart_Teacher";
import S_Cards from "../Components/Small_Chart_Student";
import A_Cards from "../Components/Small_Chart_Admin";
import Charts from "../Components/Graph";

const Dashboard = () => {
  const loginType = localStorage.getItem("role_name");

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
      ) : (
        ""
      )}
    </>
  );
};

export default Dashboard;
