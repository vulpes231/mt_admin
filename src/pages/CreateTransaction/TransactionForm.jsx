import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { style } from "../../constant/constant";
import { CustomInput, CustomLabel, CustomSelect } from "../../components";
import transactionService from "../../services/transactionService";

const users = [];

const TransactionForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

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

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      accountNumber: "",
      type: "",
      amount: "",
      memo: "",
      date: "",
      time: "",
    },
    onSubmit: (values) => {
      console.log(values);
      // createNewTransaction.mutate(values);
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
        <h4 className="text-[25px] font-semibold mb-8">Create Transaction</h4>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            validation.handleSubmit();
          }}
          className="flex flex-col gap-4"
        >
          {/* <div className={style.wrapper}>
            <CustomLabel labelText={"user"} />
            <CustomSelect
              name={"userId"}
              value={validation.values.userId}
              handleChange={validation.handleChange}
              initialText={"Select User"}
            >
              {users &&
                users.length > 0 &&
                users.map((user) => {
                  return (
                    <option key={user._id} value={user._id}>
                      {user.username}
                    </option>
                  );
                })}
            </CustomSelect>
          </div> */}

          <div className={style.wrapper}>
            <CustomLabel labelText={"type"} />
            <CustomSelect
              name={"type"}
              value={validation.values.type}
              handleChange={validation.handleChange}
              initialText={"Select Type"}
            >
              <option value="debit">Debit</option>
              <option value="credit">Credit</option>
            </CustomSelect>
          </div>
          <div className={style.wrapper}>
            <CustomLabel labelText={"account"} />
            <CustomInput
              name={"accountNumber"}
              value={validation.values.accountNumber}
              handleChange={validation.handleChange}
              type={"text"}
            />
          </div>
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
            <CustomLabel labelText={"memo"} />
            <CustomInput
              name={"memo"}
              value={validation.values.memo}
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
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TransactionForm;
