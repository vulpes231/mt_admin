import React from "react";
import {
  CustomInput,
  CustomLabel,
  ErrorToast,
  SuccessToast,
} from "../../components";
import { style } from "../../constant/constant";
import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";
import authService from "../../services/auth";
import { useNavigate } from "react-router-dom";
document.title = "Meta - Admin Register";

const Register = () => {
  const navigate = useNavigate();

  const [showPass, setShowPass] = React.useState(false);
  const [error, setError] = React.useState("");

  const enrollAdmin = useMutation({
    mutationFn: authService.createAdmin,
    onError: (err) => setError(err.message),
    onSuccess: () => {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    },
  });

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      enrollAdmin.mutate(values);
    },
  });

  return (
    <div className="bg-slate-100 h-screen flex items-center justify-center">
      <div className="bg-white rounded-md flex flex-col gap-2 p-6 w-md">
        <h4 className="font-semibold text-2xl">Create Admin</h4>
        <form
          action=""
          className="flex flex-col gap-2 p-2"
          onSubmit={(e) => {
            e.preventDefault();
            validation.handleSubmit();
          }}
        >
          <div className={style.wrapper}>
            <CustomLabel labelText={"username"} />
            <CustomInput
              value={validation.values.username}
              handleChange={validation.handleChange}
              name={"username"}
            />
          </div>
          <div className={style.wrapper}>
            <CustomLabel labelText={"password"} />
            <CustomInput
              type={showPass ? "text" : "password"}
              value={validation.values.password}
              handleChange={validation.handleChange}
              name={"password"}
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 rounded-sm bg-slate-900 text-white mt-4"
          >
            Register
          </button>
          <small>
            Already have an account? <a href="/">Login now</a>
          </small>
        </form>
      </div>
      {error && (
        <ErrorToast errorMsg={error} handleClose={() => setError("")} />
      )}
      {enrollAdmin.isSuccess && (
        <SuccessToast
          successMsg={"Login Success."}
          handleClose={() => enrollAdmin.reset()}
        />
      )}
    </div>
  );
};

export default Register;
