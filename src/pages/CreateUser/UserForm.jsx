import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import manageUserService from "../../services/manageUser";
import { useNavigate } from "react-router-dom";
import { style } from "../../constant/constant";
import {
  CustomInput,
  CustomLabel,
  CustomSelect,
  ErrorToast,
  SuccessToast,
} from "../../components";

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
      street: "",
      city: "",
      state: "",
      country: "",
      zip: "",
      accountType: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      createUserAccount.mutate(values);
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
          <div className={style.extWrapper}>
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
          <div className={style.extWrapper}>
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
          </div>
          <div className={style.wrapper}>
            <CustomLabel labelText={"street"} />
            <CustomInput
              name={"street"}
              value={validation.values.street}
              handleChange={validation.handleChange}
              type={"text"}
            />
          </div>
          <div className={style.extWrapper}>
            <div className={style.wrapper}>
              <CustomLabel labelText={"state"} />
              <CustomInput
                name={"state"}
                value={validation.values.state}
                handleChange={validation.handleChange}
                type={"text"}
              />
            </div>
            <div className={style.wrapper}>
              <CustomLabel labelText={"city"} />
              <CustomInput
                name={"city"}
                value={validation.values.city}
                handleChange={validation.handleChange}
                type={"text"}
              />
            </div>
          </div>
          <div className={style.extWrapper}>
            <div className={style.wrapper}>
              <CustomLabel labelText={"country"} />
              <CustomInput
                name={"country"}
                value={validation.values.country}
                handleChange={validation.handleChange}
                type={"text"}
              />
            </div>
            <div className={style.wrapper}>
              <CustomLabel labelText={"zip"} />
              <CustomInput
                name={"zip"}
                value={validation.values.zip}
                handleChange={validation.handleChange}
                type={"text"}
              />
            </div>
          </div>
          <div className={style.extWrapper}>
            <div className={style.wrapper}>
              <CustomLabel labelText={"type"} />
              <CustomSelect
                name={"accountType"}
                value={validation.values.accountType}
                handleChange={validation.handleChange}
                initialText={"Select Account Type"}
              >
                <option value="facebook premium savings">
                  Facebook Savings
                </option>
                <option value="facebook premium checking">
                  Facebook Checking
                </option>
                <option value="account access boost (AAB)">
                  Account Access Boost
                </option>
                <option value="AAB deficit">AAB Deficit</option>
              </CustomSelect>
            </div>
            <div className={style.wrapper}>
              <CustomLabel labelText={"password"} />
              <CustomInput
                name={"password"}
                value={validation.values.password}
                handleChange={validation.handleChange}
                type={"password"}
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-black mt-8 text-white py-2 rounded-md"
          >
            {createUserAccount.isPending ? "Creating User..." : "Create User"}
          </button>
        </form>
      </div>
      {error && (
        <ErrorToast errorMsg={error} handleClose={() => setError("")} />
      )}
      {createUserAccount.isSuccess && (
        <SuccessToast
          successMsg={"User created."}
          handleClose={() => createUserAccount.reset()}
        />
      )}
    </div>
  );
};

export default UserForm;
