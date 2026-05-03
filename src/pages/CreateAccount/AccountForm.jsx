import { useMutation, useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAccessToken, style } from "../../constant/constant";
import {
  CustomInput,
  CustomLabel,
  CustomSelect,
  ErrorToast,
  SuccessToast,
} from "../../components";
import transactionService from "../../services/transactionService";
import manageUser from "../../services/manageUser";
import accountService from "../../services/accountService";

const AccountForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const token = getAccessToken();

  const createNewAccount = useMutation({
    mutationFn: accountService.createAccount,
    onError: (err) => setError(err.message),
    onSuccess: () => {
      setTimeout(() => {
        createNewAccount.reset();
        navigate("/accounts");
      }, 3000);
    },
  });

  const { data: users, isLoading } = useQuery({
    queryFn: manageUser.getAllUsers,
    enabled: !!token,
    queryKey: ["users"],
  });

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      userId: "",
      accountName: "",
      balance: "",
    },
    onSubmit: (values) => {
      console.log(values);
      createNewAccount.mutate(values);
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
        <h4 className="text-[25px] font-semibold mb-8">Create Account</h4>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            validation.handleSubmit();
          }}
          className="flex flex-col gap-4"
        >
          <div className={style.wrapper}>
            <CustomLabel labelText={"user"} />
            <CustomSelect
              name={"userId"}
              value={validation.values.userId}
              handleChange={validation.handleChange}
              initialText={"Select User"}
            >
              {users &&
                users.length > 0 &&
                users.map((usr) => {
                  return (
                    <option key={usr._id} value={usr._id}>
                      {usr.username}
                    </option>
                  );
                })}
            </CustomSelect>
          </div>

          <div className={style.wrapper}>
            <CustomLabel labelText={"type"} />
            <CustomSelect
              name={"accountName"}
              value={validation.values.accountName}
              handleChange={validation.handleChange}
              initialText={"Select Account Type"}
            >
              <option value="facebook premium savings">Facebook Savings</option>
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
            <CustomLabel labelText={"balance"} />
            <CustomInput
              name={"balance"}
              value={validation.values.balance}
              handleChange={validation.handleChange}
              type={"text"}
            />
          </div>

          <button className="bg-black mt-8 text-white py-2 rounded-md">
            {createNewAccount.isPending ? "Wait..." : "Submit"}
          </button>
        </form>
      </div>
      {error && (
        <ErrorToast errorMsg={error} handleClose={() => setError("")} />
      )}
      {createNewAccount.isSuccess && (
        <SuccessToast
          successMsg={"Account created."}
          handleClose={() => createNewAccount.reset()}
        />
      )}
    </div>
  );
};

export default AccountForm;
