import { Button, Modal } from "antd";
import { useState } from "react";
import "./Components_Styles/Model.css";

const ModelAddDepartment = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const postData = (e) => {
    e.preventDefault();
    props.postDepartment();
    setIsModalVisible(false)
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Department
      </Button>
      <Modal
        title="Add Department"
        visible={isModalVisible}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }
        
       }
      >
        <form className="form">
          <input
            className="form-input"
            type="name"
            value={props.addDepartmentName}
            onChange={(e) => props.setAddDepartmentName(e.target.value)}
            placeholder="Enter Department Name"
          />
          <input
            className="form-input"
            type="name"
            value={props.addDepartmentCode}
            onChange={(e) => props.setAddDepartmentCode(e.target.value)}
            placeholder="Enter department Code"
          />
          
          <button className="form-btn" onClick={postData} type = "submit" >
              Add

          </button>
        </form>
      </Modal>
    </>
  );
};

export default ModelAddDepartment;
