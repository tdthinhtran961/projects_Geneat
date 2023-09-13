import React, { useState } from "react";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import FormRow from "../../components/FormRow";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateUser } from "../../features/user/userSlice";

const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    lastName: user?.lastName || "",
    location: user?.location || "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, lastName, location } = userData;
    if (!name || !email || !lastName || !location) {
      toast.error("Please Fill Out All fields");
      return;
    }
    dispatch(updateUser({ name, email, lastName, location }));
  };

  return (
    <Wrapper>
      <form action="" className="form" onSubmit={handleSubmit}>
        <h3>profile</h3>
        <div className="form-center">
          <FormRow
            name="name"
            value={userData.name}
            handleChange={handleChange}
          ></FormRow>
          <FormRow
            name="lastName"
            labelText={"last name"}
            value={userData.lastName}
            handleChange={handleChange}
          ></FormRow>
          <FormRow
            type="email"
            name="email"
            value={userData.email}
            handleChange={handleChange}
          ></FormRow>
          <FormRow
            name="location"
            value={userData.location}
            handleChange={handleChange}
          ></FormRow>
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? "Please wait..." : "save changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
