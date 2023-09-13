import React, { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { FormRow, Logo } from "../components";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, registerUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const initState = {
  name: "",
  email: "",
  password: "",
  isMember: "",
};

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initState);
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [navigate, user]);

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(`${name}:${value}`);
    setValues({ ...values, [name]: value });
  };

  const handleClickDemo = () => {
    dispatch(loginUser({ email: "testUser@test.com", password: "secret" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error("Please fill out all fields");
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }));
      return;
    }
    dispatch(registerUser({ name, email, password }));
  };
  return (
    <Wrapper className="full-page">
      <form action="" className="form" onSubmit={handleSubmit}>
        <Logo></Logo>
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {/* Name field */}
        {!values.isMember && (
          <FormRow
            name="name"
            value={values.name}
            handleChange={handleChange}
          ></FormRow>
        )}
        {/* email field */}
        <FormRow
          name="email"
          type={"email"}
          value={values.email}
          handleChange={handleChange}
        ></FormRow>
        {/* password field */}
        <FormRow
          name="password"
          type={"password"}
          value={values.password}
          handleChange={handleChange}
        ></FormRow>
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {isLoading ? "loading..." : "submit"}
        </button>
        <button
          type="button"
          className="btn btn-block btn-hipster"
          disabled={isLoading}
          onClick={handleClickDemo}
        >
          {isLoading ? "loading..." : "demo"}
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}

          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
