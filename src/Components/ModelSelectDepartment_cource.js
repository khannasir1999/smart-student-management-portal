import { Button, Modal } from "antd";
import { useState, useEffect } from "react";
import "./Components_Styles/Model.css";

import axios from "axios";


const ModelSelectDepartment_cource = () => {

    // code for Model visibility.........................
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    
    //code for get department...............
    const [department, setDepartment] = useState([]);
    
    useEffect(() => {
        getDepartment();
    }, []);

    const getDepartment = async () => {
        const res = await axios.get("http://localhost:8000/api/department/");
        console.log(res);
        setDepartment(res.data);
    };
    
    // code for get courses .................................
    const [course, setCourse] = useState([])
    const [course_name, setCourse_name] = useState("")

    

    const getCouse = async (id) => {
        const res = await axios.get("http://localhost:8000/api/show_course/" + id);
        console.log(res);
        setCourse(res.data.Courses_detail);
    };
    
   // code for model submission..................................  
    const courceSelected = (e) => {
        e.preventDefault();
        localStorage.setItem("course_name", course_name)
        setIsModalVisible(false)
        window.location = "/manage_attendance"
    };
    
    console.log(course_name)
    return (
        <>
            <Button type="primary" onClick={showModal} className = "btn">
                Select Department and Course
            </Button>
            <Modal
                title="Select"
                visible={isModalVisible}
                onCancel={handleCancel}
                cancelButtonProps={{ style: { display: "none" } }}
                okButtonProps={{ style: { display: "none" } }

                }
            >
                <form className="form">

                    <select
                        name="Department name"
                        className="form-input"
                        onChange={(e) => {
                           
                            getCouse(e.target.value)
                        }}
                    >
                        <option value="none" selected disabled hidden>
                            Select Department
                        </option>
                        {
                            department.map((items) => {
                                return (
                                    <option value={items.id} >      {items.department_name}</option>
                                )
                            })
                        }
                    </select>



                    <select
                        name="Signup Type"
                        className="form-input"
                        onChange={(e) => setCourse_name(e.target.value)}
                    >
                        <option value="none" selected disabled hidden>
                            Select Course
                        </option>
                        {
                            course.map((items) => {
                                return (
                                    <option value={items.subject_name}>{items.subject_name}</option>
                                )
                            })
                        }
                    </select>


                    <button className="form-btn" onClick={courceSelected} >
                        Add

                    </button>
                </form>
            </Modal>
        </>
    );
};

export default ModelSelectDepartment_cource;
