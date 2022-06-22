import { Button, Modal } from "antd";
import { useState } from "react";
import "./Components_Styles/Model.css";


const ModelAddSubject = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const postData = (e) => {
    e.preventDefault();
    props.postSubject();
    setIsModalVisible(false)
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal} className="btn">
        Add new Subject
      </Button>
      <Modal
        title="Add Subject"
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
            value={props.subject_name}
            onChange={(e) => props.setSubject_name(e.target.value)}
            placeholder=" Subject name"
          />
          
          <button className="form-btn" onClick={postData} type = "submit" >
              Add

          </button>
        </form>
      </Modal>
    </>
  );
};

export default ModelAddSubject;
