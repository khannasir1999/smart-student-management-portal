import React, { useState, useEffect } from "react";
import { MDBDataTableV5 } from "mdbreact";
import "../Components/Components_Styles/Margin_pages.css";
import axios from "axios";
//import { Button } from "antd";
import ModelAddDepartment from "../Components/ModelAddDepartment";
import { Button } from "antd";

const Departments = () => {
  //states of post data....................................
  const [addDepartmentName, setAddDepartmentName] = useState("");
  const [addDepartmentCode, setAddDepartmentCode] = useState("");
  const [department, setDepartment] = useState([]);

  const baseUrl = "http://localhost:8000/api/department/";

  useEffect(() => {
    getDepartment();
  }, []);

  const getDepartment = async () => {
    const res = await axios.get(baseUrl);
    console.log(res);
    setDepartment(res.data);
  };

  const postDepartment = async () => {
    try {
      const res = await axios.post(baseUrl, {
        department_name: addDepartmentName,
        department_code: addDepartmentCode,
      });
      console.log(res);
      getDepartment();
    } catch (error) {
      console.log(error.res.data);
    }
  };

  // code for Delete Teacher.......................
  const delDepartment = async (id) => {
    const res = await axios.delete(baseUrl + id);
    console.log(res);
    getDepartment();
  };

  return (
    <div className="margin-all">
      {" "}
      <MDBDataTableV5
        hover
        entriesOptions={[5, 20, 25]}
        entries={5}
        pagesAmount={4}
        data={{
          columns: [
            {
              label: "ID",
              field: "department_id",
              width: 450,
            },
            {
              label: "Department",
              field: "department_name",
              width: 450,
              attributes: {
                "aria-controls": "DataTable",
                "aria-label": "Name",
              },
            },
            {
              label: "Department code",
              field: "department_code",
              width: 450,
            },

            {
              label: (
                <ModelAddDepartment
                  addDepartmentName={addDepartmentName}
                  addDepartmentCode={addDepartmentCode}
                  setAddDepartmentName={setAddDepartmentName}
                  setAddDepartmentCode={setAddDepartmentCode}
                  postDepartment={postDepartment}
                />
              ),
              field: "btn",
            },
          ],
          rows: department.map((items) => {
            return {
              department_id: items.id,
              department_name: items.department_name,
              department_code: items.department_code,
              btn: (
                <button
                  className="td-btn"
                  onClick={() => {
                    delDepartment(items.id);
                  }}
                >
                  Delete
                </button>
              ),
            };
          }),
        }}
        searchTop
        searchBottom={false}
      />{" "}
    </div>
  );
};

export default Departments;
