import { Modal, Button } from 'antd';
import "./Components_Styles/Model.css";

const ModelSignup = (props) => {

  const showModal = () => {
    props.setIsSignupVisible(true);
  };

  const handleCancel = () => {
    props.setIsSignupVisible(false);
  };
  const handleModol =()=>{
    props.setIsSignupVisible(false);
    props.setIsLoginVisible(true)
  }

  return (
    <>
      <Button type="primary" onClick={showModal} >
        Sign Up
      </Button>
      <Modal title="Sign Up" visible={props.isSignupVisible}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}>

        <form className="form" >
          <input type="text" name="text" placeholder=" Enter Name" className="form-input" />
          <input type="text" name="username" placeholder=" Enter User Name" className="form-input" />
          <input type="email" name="email" placeholder=" Enter Email" className="form-input" />
          <input type="password" name="password" placeholder=" Enter Password" className="form-input" />
          <input type="password" name="confirm-password" placeholder=" Confirm Password" className="form-input" />
          <button className="form-btn">Sign Up</button>

        </form>
        <div className="form">
            Already have account? <button className='switch-btn' onClick={handleModol}>Login</button>
          </div>

      </Modal>
    </>
  );
};

export default ModelSignup;