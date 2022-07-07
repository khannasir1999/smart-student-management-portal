export const first_name = (val) => {
  return {
    type: "first_name",
    payload: val,
  };
};

export const last_name = (val) => {
  return {
    type: "last_name",
    payload: val,
  };
};

export const father_name = (val) => {
  return {
    type: "father_name",
    payload: val,
  };
};

export const age = (val) => {
  return {
    type: "age",
    payload: val,
  };
};

export const gender = (val) => {
  return {
    type: "gender",
    payload: val,
  };
};

export const email = (val) => {
  return {
    type: "email",
    payload: val,
  };
};

export const phone_no = (val) => {
  return {
    type: "phone_no",
    payload: val,
  };
};

export const picture = (val) => {
  return {
    type: "picture",
    payload: val,
  };
};

export const role_name = (val) => {
  return {
    type: "role_name",
    payload: val,
  };
};

export const auth_token = (val) => {
  return {
    type: "auth_token",
    payload: val,
  };
};

export const logout = () => {
  return {
    type: "logout",
  };
};
export const student_id = (val) => {
  return {
    type: "student_id",
    payload: val,
  }
};
export const class_id = (val) => {
  return {
    type: "class_id",
    payload: val,
  }
};
export const attendance_status = (val) => {
  return {
    type: "attendance_status",
    payload: val,
  }
};


// action of reRenderReducer.................................................

export const userGet = (val) => {
  return {
    type: "userGet",
    payload: val,
  };
};
