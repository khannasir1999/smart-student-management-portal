// Login Object......................
const loginData = {
  auth_token: "",
  role_name: "",
  first_name: "",
  last_name: "",
  father_name: "",
  gender: "",
  age: "",
  email: "",
  phone_no: "",
  picture: "",
};

// Reducer ..........................
const loginReducer = (state = loginData, action) => {
  switch (action.type) {
    case "role_name":
      return {
        ...state,
        role_name: action.payload,
      };
    case "auth_token":
      return {
        ...state,
        auth_token: action.payload,
      };
    case "first_name":
      return {
        ...state,
        first_name: action.payload,
      };
    case "last_name":
      return {
        ...state,
        last_name: action.payload,
      };
    case "father_name":
      return {
        ...state,
        father_name: action.payload,
      };
    case "gender":
      return {
        ...state,
        gender: action.payload,
      };
    case "age":
      return {
        ...state,
        age: action.payload,
      };
    case "email":
      return {
        ...state,
        email: action.payload,
      };
    case "phone_no":
      return {
        ...state,
        phone_no: action.payload,
      };
    case "picture":
      return {
        ...state,
        picture: action.payload,
      };
    case "logout":
      return {
        ...state,
        first_name: "",
        last_name: "",
        father_name: "",
        gender: "",
        age: "",
        email: "",
        phone_no: "",
        picture: "",
        role_name: "",
        auth_token: "",
      };

    default:
      return state;
  }
};
export default loginReducer;
