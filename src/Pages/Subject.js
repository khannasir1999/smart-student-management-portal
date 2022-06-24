import React, { useState } from "react";
import { MDBDataTableV5 } from "mdbreact";
import { useEffect } from "react";
import axios from "axios";
import "../Components/Components_Styles/Margin_pages.css";
import ModelAddSubject from "../Components/ModelAddSubject";
import { defaultPrefixCls } from "antd/lib/config-provider";

export default function Subject() {
  const [subject, setSubject] = useState([]);
  const [departmentName, setDepartmentName] = useState("----");
  const [department, setDepartment] = useState([]);
  const [departmentID, setDepartmentID] = useState("");
  const [subject_name, setSubject_name] = useState("");
  const [addBtn, setAddBtn] = useState("");

  // code of get Department.....................................
  useEffect(() => {
    getDepartment();
  }, []);

  const getDepartment = async () => {
    const res = await axios.get("http://localhost:8000/api/department/");

    setDepartment(res.data);
  };

  // code of get Subject.....................................

  useEffect(() => {
    if (departmentID !== "") getSubject();
  }, [departmentID]);

  const getSubject = async () => {
    const res = await axios.get(
      "http://localhost:8000/api/show_course_department/" + departmentID
    );
    // console.log(res.data.Department.id);
    setSubject(res.data.Department.subject);
    setDepartmentID(res.data.Department.id);
    setDepartmentName(res.data.Department.department_name);
  };

  // code of post subject .....................................
  const postSubject = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/add_course/" + departmentID,
        {
          subject_name: subject_name,
        }
      );
      // console.log(res);
      getSubject();
    } catch (error) {
      console.log(error.res.data);
    }
  };

  // code of add subject button handler

  return (
    <div className="margin-all">
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <h2 style={{ fontWeight: "bold" }}>
          Subjects of {departmentName} Department{" "}
        </h2>
      </div>
      <br />
      <select
        name="Department name"
        className="form-search"
        value="Select Department for Subjects"
        onChange={(e) => {
          setDepartmentID(e.target.value);
          setAddBtn("show");
        }}
      >
        <option defaultValue="none" disabled hidden>
          Select Department for Subjects
        </option>
        {department.map((items, key) => {
          return (
            <option key={key} value={items.id}>
              {items.department_name}
            </option>
          );
        })}
      </select>
      {addBtn === "show" ? (
        <ModelAddSubject
          setSubject_name={setSubject_name}
          subject_name={subject_name}
          postSubject={postSubject}
        />
      ) : (
        ""
      )}
      <br />
      <br />
      <MDBDataTableV5
        hover
        entriesOptions={[5, 20, 25]}
        entries={5}
        pagesAmount={4}
        data={{
          columns: [
            {
              label: "Id",
              field: "id",
              sort: "disable",
              width: 450,
            },
            {
              label: "Subject Name",
              field: "name",
              width: 450,
              attributes: {
                "aria-controls": "DataTable",
                "aria-label": "Name",
              },
            },
          ],
          rows: subject.map((items) => {
            return {
              id: items.id,
              name: items.subject_name,
            };
          }),
        }}
        searchBottom={false}
      />
    </div>
  );
}
