import React from "react";
import { CustomInput, CustomLabel } from "../../components";
import { style } from "../../constant/constant";
import { useFormik } from "formik";

const Login = () => {
  document.title = "Meta - Admin Login";

  const [showPass, setShowPass] = React.useState();
  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="bg-slate-100 h-screen flex items-center justify-center">
      <div className="bg-white rounded-md flex flex-col gap-2 p-6 w-md">
        <h4 className="font-semibold text-2xl">Admin Login</h4>
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
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
