import api from "../constant/APIClient";

class TransactionService {
  constructor() {
    this.handleError = this.handleError.bind(this);
    this.getAllTransactions = this.getAllTransactions.bind(this);
    this.createTransaction = this.createTransaction.bind(this);
    this.editTransaction = this.editTransaction.bind(this);
    this.deleteTransaction = this.deleteTransaction.bind(this);
  }
  handleError = (error, defaultMessage) => {
    const errMsg = error.response?.data?.message || defaultMessage;
    throw new Error(errMsg, { cause: error });
  };

  async getAllTransactions(form) {
    try {
      const response = await api.get("/manage-transaction");
      return response.data.data;
    } catch (getTrxError) {
      this.handleError(getTrxError, "Failed fetch users.");
    }
  }

  async createTransaction(formData) {
    try {
      const response = await api.post(`/manage-transaction`, formData);
      return response.data;
    } catch (createError) {
      this.handleError(createError, "Failed to create transaction.");
    }
  }

  async editTransaction(transactionId) {
    try {
      const response = await api.patch(`/manage-transaction/${transactionId}`);
      return response.data;
    } catch (logoutError) {
      this.handleError(logoutError, "Failed to edit transaction.");
    }
  }

  async deleteTransaction(transactionId) {
    try {
      const response = await api.delete(`/manage-transaction/${transactionId}`);
      return response.data;
    } catch (logoutError) {
      this.handleError(logoutError, "Failed to delete transaction.");
    }
  }
}

export default new TransactionService();
