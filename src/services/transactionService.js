import api from "../constant/APIClient";

class TransactionService {
  handleError(error, defaultMessage) {
    const errMsg = error.response?.data?.message || defaultMessage;
    throw new Error(errMsg, { cause: error });
  }

  async getAllTransactions(form) {
    try {
      const response = await api.get("/transaction");
      return response.data;
    } catch (getUserError) {
      this.handleError(getUserError, "Failed fetch users.");
    }
  }

  async createTransaction(formData) {
    try {
      const response = await api.post(`/transaction`, formData);
      return response.data;
    } catch (createError) {
      this.handleError(createError, "Failed to create transaction.");
    }
  }

  async editTransaction(transactionId) {
    try {
      const response = await api.put(`/transaction/${transactionId}`);
      return response.data;
    } catch (logoutError) {
      this.handleError(logoutError, "Failed to edit transaction.");
    }
  }

  async deleteTransaction(transactionId) {
    try {
      const response = await api.delete(`/transaction/${transactionId}`);
      return response.data;
    } catch (logoutError) {
      this.handleError(logoutError, "Failed to delete transaction.");
    }
  }
}

export default new TransactionService();
