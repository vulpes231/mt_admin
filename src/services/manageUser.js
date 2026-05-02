import api from "../constant/APIClient";

class ManageUserService {
  constructor() {
    this.handleError = this.handleError.bind(this);
    this.getAllUsers = this.getAllUsers.bind(this);
    this.createUser = this.createUser.bind(this);
    this.getUserInformation = this.getUserInformation.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  handleError = (error, defaultMessage) => {
    const errMsg = error.response?.data?.message || defaultMessage;
    throw new Error(errMsg, { cause: error });
  };

  async getAllUsers(form) {
    try {
      const response = await api.get("/manage-user");
      return response.data.data;
    } catch (getUserError) {
      this.handleError(getUserError, "Failed fetch users.");
    }
  }

  async createUser(formData) {
    try {
      const response = await api.post(`/manage-user`, formData);
      return response.data;
    } catch (createError) {
      this.handleError(createError, "Failed to create user.");
    }
  }

  async getUserInformation(userId) {
    try {
      const response = await api.get(`/manage-user/${userId}`);
      return response.data;
    } catch (createError) {
      this.handleError(createError, "Failed get user info.");
    }
  }

  async deleteUser(userId) {
    try {
      const response = await api.delete(`/manage-user/${userId}`);
      return response.data;
    } catch (logoutError) {
      this.handleError(logoutError, "Failed delete user.");
    }
  }
}

export default new ManageUserService();
