import api from "../constant/APIClient";

class AccountService {
  constructor() {
    this.handleError = this.handleError.bind(this);
    this.getAllAccounts = this.getAllAccounts.bind(this);
    this.createAccount = this.createAccount.bind(this);
    this.editAccount = this.editAccount.bind(this);
    this.getUserAccounts = this.getUserAccounts.bind(this);
  }
  handleError = (error, defaultMessage) => {
    const errMsg = error.response?.data?.message || defaultMessage;
    throw new Error(errMsg, { cause: error });
  };

  async getAllAccounts(form) {
    try {
      const response = await api.get("/manage-account");
      return response.data.data;
    } catch (getTrxError) {
      this.handleError(getTrxError, "Failed fetch accounts.");
    }
  }

  async createAccount(formData) {
    try {
      const response = await api.post(`/manage-account`, formData);
      return response.data;
    } catch (createError) {
      this.handleError(createError, "Failed to create account.");
    }
  }

  async editAccount(accountId) {
    try {
      const response = await api.patch(`/manage-account/${accountId}`);
      return response.data;
    } catch (logoutError) {
      this.handleError(logoutError, "Failed to edit account.");
    }
  }

  async getUserAccounts(userId) {
    try {
      const response = await api.get(`/manage-account/${userId}`);
      //   console.log(response.data.data);
      return response.data.data;
    } catch (logoutError) {
      this.handleError(logoutError, "Failed to delete account.");
    }
  }
}

export default new AccountService();
