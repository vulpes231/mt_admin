import { useMutation, useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatAmount, getAccessToken, style } from "../../constant/constant";
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

const users = [];

const TransactionForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const token = getAccessToken();

  const createNewTransaction = useMutation({
    mutationFn: transactionService.createTransaction,
    onError: (err) => setError(err.message),
    onSuccess: () => {
      setTimeout(() => {
        createNewTransaction.reset();
        navigate("/transactions");
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
      accountId: "",
      userId: "",
      type: "",
      amount: "",
      description: "",
      date: "",
      time: "",
    },
    onSubmit: (values) => {
      console.log(values);
      createNewTransaction.mutate(values);
    },
  });

  const { data: accounts } = useQuery({
    queryFn: () => accountService.getUserAccounts(validation.values.userId),
    enabled: !!validation.values.userId,
    queryKey: ["userAccounts", validation.values.userId],
  });

  // console.log(accounts);

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
        <h4 className="text-[25px] font-semibold mb-8">Create Transaction</h4>
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
            <CustomLabel labelText={"account"} />
            <CustomSelect
              name={"accountId"}
              value={validation.values.accountId}
              handleChange={validation.handleChange}
              initialText={"Select Account"}
            >
              {accounts &&
                accounts.length > 0 &&
                accounts.map((acct) => {
                  return (
                    <option key={acct._id} value={acct._id}>
                      {acct.accountName} :{" "}
                      {formatAmount(acct.balance.available)}
                    </option>
                  );
                })}
            </CustomSelect>
          </div>

          <div className={style.wrapper}>
            <CustomLabel labelText={"type"} />
            <CustomSelect
              name={"type"}
              value={validation.values.type}
              handleChange={validation.handleChange}
              initialText={"Select Type"}
            >
              <option value="deposit">Deposit</option>
              <option value="withdraw">Withdraw</option>
            </CustomSelect>
          </div>
          {/* <div className={style.wrapper}>
            <CustomLabel labelText={"account"} />
            <CustomInput
              name={"accountId"}
              value={validation.values.accountId}
              handleChange={validation.handleChange}
              type={"text"}
            />
          </div> */}
          <div className={style.wrapper}>
            <CustomLabel labelText={"amount"} />
            <CustomInput
              name={"amount"}
              value={validation.values.amount}
              handleChange={validation.handleChange}
              type={"text"}
            />
          </div>
          <div className={style.wrapper}>
            <CustomLabel labelText={"description"} />
            <CustomInput
              name={"description"}
              value={validation.values.description}
              handleChange={validation.handleChange}
              type={"text"}
            />
          </div>
          <div className={style.extWrapper}>
            <div className={style.wrapper}>
              <CustomLabel labelText={"date"} />
              <CustomInput
                name={"date"}
                value={validation.values.date}
                handleChange={validation.handleChange}
                type={"text"}
                placeHolder={"mmm dd, yyyy"}
              />
            </div>
            <div className={style.wrapper}>
              <CustomLabel labelText={"time"} />
              <CustomInput
                name={"time"}
                value={validation.values.time}
                handleChange={validation.handleChange}
                type={"text"}
              />
            </div>
          </div>
          <button className="bg-black mt-8 text-white py-2 rounded-md">
            {createNewTransaction.isPending ? "Wait..." : "Submit"}
          </button>
        </form>
      </div>
      {error && (
        <ErrorToast errorMsg={error} handleClose={() => setError("")} />
      )}
      {createNewTransaction.isSuccess && (
        <SuccessToast
          successMsg={"Transaction created."}
          handleClose={() => createNewTransaction.reset()}
        />
      )}
    </div>
  );
};

export default TransactionForm;
