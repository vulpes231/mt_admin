import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import manageUser from "../../services/manageUser";
import { useNavigate } from "react-router-dom";
import { ErrorToast, SuccessToast } from "../../components";

const DeleteUserModal = ({ userId, onClose, onConfirm }) => {
  const modalRef = useRef(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const deleteUserAccount = useMutation({
    mutationFn: manageUser.deleteUser,
    onError: (err) => setError(err.message),
    onSuccess: () => {
      setTimeout(() => {
        onClose();
        window.location.reload();
      }, 3000);
    },
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  const handleConfirm = () => {
    deleteUserAccount.mutate(userId);
  };

  useEffect(() => {
    if (error) {
      const tmt = setTimeout(() => {
        setError("");
      }, 3000);
      return () => clearTimeout(tmt);
    }
  }, [error]);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
      <div
        ref={modalRef}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden animate-slideUp"
      >
        <div className="bg-red-50 px-6 py-4 border-b border-red-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Delete User</h2>
          </div>
        </div>

        <div className="px-6 py-5">
          <p className="text-gray-600 mb-2">
            Are you sure you want to delete user{" "}
            <span className="font-semibold text-gray-900">#{userId}</span>?
          </p>
          <p className="text-sm text-gray-500">
            This action cannot be undone. The user will be permanently removed
            from the system.
          </p>
        </div>

        <div className="px-6 py-4 bg-gray-50 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 shadow-sm"
            disabled={deleteUserAccount.isPending}
          >
            {deleteUserAccount.isPending ? "Deleting..." : " Delete User"}
          </button>
        </div>
      </div>
      {error && (
        <ErrorToast errorMsg={error} handleClose={() => setError("")} />
      )}
      {deleteUserAccount.isSuccess && (
        <SuccessToast
          successMsg={"Account Deleted"}
          handleClose={() => deleteUserAccount.reset()}
        />
      )}
    </div>
  );
};

export default DeleteUserModal;
