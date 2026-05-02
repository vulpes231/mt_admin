import api from "../constant/APIClient";

class ManageUserService {
  handleError(error, defaultMessage) {
    const errMsg = error.response?.data?.message || defaultMessage;
    throw new Error(errMsg, { cause: error });
  }

  async getAllUsers(form) {
    try {
      const response = await api.get("/user");
      return response.data;
    } catch (getUserError) {
      this.handleError(getUserError, "Failed fetch users.");
    }
  }

  async createUser(formData) {
    try {
      const response = await api.post(`/user`, formData);
      return response.data;
    } catch (createError) {
      this.handleError(createError, "Failed to create user.");
    }
  }

  async getUserInformation(userId) {
    try {
      const response = await api.get(`/user/${userId}`);
      return response.data;
    } catch (createError) {
      this.handleError(createError, "Failed get user info.");
    }
  }

  async deleteUser(userId) {
    try {
      const response = await api.delete(`/user/${userId}`);
      return response.data;
    } catch (logoutError) {
      this.handleError(logoutError, "Failed delete user.");
    }
  }
}

export default new ManageUserService();
