import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import manageUserService from "../../services/manageUser";
import { useNavigate } from "react-router-dom";
import { style } from "../../constant/constant";
import { CustomInput, CustomLabel } from "../../components";

const UserForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const createUserAccount = useMutation({
    mutationFn: manageUserService.createUser,
    onError: (err) => setError(err.message),
    onSuccess: () => {
      setTimeout(() => {
        createUserAccount.reset();
        navigate("/users");
      }, 3000);
    },
  });

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
    },
    onSubmit: (values) => {
      console.log(values);
      // createUserAccount.mutate(values);
    },
  });

  useEffect(() => {
    if (error) {
      const tmt = setTimeout(() => {
        setError("");
      }, 3000);
      return () => clearTimeout(tmt);
    }
  }, [error]);

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white shadow-md p-6 rounded-md w-lg">
        <h4 className="text-[25px] font-semibold mb-8">Create New Account</h4>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            validation.handleSubmit();
          }}
          className="flex flex-col gap-4"
        >
          <div className={style.wrapper}>
            <CustomLabel labelText={"first name"} />
            <CustomInput
              name={"firstname"}
              value={validation.values.firstname}
              handleChange={validation.handleChange}
              type={"text"}
            />
          </div>
          <div className={style.wrapper}>
            <CustomLabel labelText={"last name"} />
            <CustomInput
              name={"lastname"}
              value={validation.values.lastname}
              handleChange={validation.handleChange}
              type={"text"}
            />
          </div>
          <div className={style.wrapper}>
            <CustomLabel labelText={"username"} />
            <CustomInput
              name={"username"}
              value={validation.values.username}
              handleChange={validation.handleChange}
              type={"text"}
            />
          </div>
          <div className={style.wrapper}>
            <CustomLabel labelText={"email"} />
            <CustomInput
              name={"email"}
              value={validation.values.email}
              handleChange={validation.handleChange}
              type={"text"}
            />
          </div>
          <div className={style.wrapper}>
            <CustomLabel labelText={"phone"} />
            <CustomInput
              name={"phone"}
              value={validation.values.phone}
              handleChange={validation.handleChange}
              type={"text"}
            />
          </div>
          <button className="bg-black mt-8 text-white py-2 rounded-md">
            Create User
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
