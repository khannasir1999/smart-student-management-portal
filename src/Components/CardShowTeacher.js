import "./Components_Styles/CardShowTeacher.css";
import ModelAddTeacher from "./ModelAddTeacher";
const CardShowTeacher = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Teacher's Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th className="th-btn">
            <ModelAddTeacher
              getTeacher={props.getTeacher}
              setRegisterName={props.setRegisterName}
              registerName={props.registerName}
              setRegisterEmail={props.setRegisterEmail}
              registerEmail={props.registerEmail}
              setRegisterPhone_no={props.setRegisterPhone_no}
              registerPhone_no={props.registerPhone_no}
              setRegisterPassword={props.setRegisterPassword}
              registerPassword={props.registerPassword}
              setRegisterPassword_confirmation={
                props.setRegisterPassword_confirmation
              }
              registerPassword_confirmation={
                props.registerPassword_confirmation
              }
              setTitle={props.setTitle}
              title={props.title}
              getPutId={props.getPutId}
              isSignupVisible={props.isSignupVisible}
              setIsSignupVisible={props.setIsSignupVisible}
              editTeacher={props.editTeacher}
            />
          </th>
        </tr>
      </thead>
      {props.teacherData.map((items, key) => {
        return (
          <tbody key={key}>
            <tr>
              <td className="td-id">{items.id}</td>
              <td>{items.name}</td>
              <td>{items.email}</td>
              <td>{items.phone_no}</td>
              <td className="td-btn">
                <button className="td-btn"
                  onClick={() => {
                    props.setTitle("edit");
                    props.setIsSignupVisible(true);
                    props.setRegisterName(items.name);
                    props.setRegisterPhone_no(items.phone_no);
                    props.setRegisterEmail(items.email);
                    props.setPutId(items.id);
                  }}
                >
                  Edit
                </button >
                <button className="td-btn" onClick={() => props.delTeacher(items.id)}>
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};
export default CardShowTeacher;
