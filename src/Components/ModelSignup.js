import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const ModelSignup = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Sign Up
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

        <form>
         <input type="text"></input>
        
        </form>
        
      </Modal>
    </>
  );
};

export default ModelSignup;