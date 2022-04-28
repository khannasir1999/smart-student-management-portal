const login_teacher = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/api/teacher_login", {
        email: inputEmail,
        password: inputPassword,
        
      });
      if (res.status === 200) {
        localStorage.setItem("auth_user", res.data.user);
        localStorage.setItem("auth_token", res.data.token);
        swal({
          position: 'center',
          icon: 'success',
          title: 'Successfully Loged in',
          timer: 1500
        })
        props.setIsLoginVisible(false);
        navigate("/dashboard");
      }
    } catch (error) {
      setInputError("invalid credentials");
    }
  };