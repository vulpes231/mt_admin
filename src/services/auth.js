import api from "../constant/APIClient";

class authService {
  handleError(error, defaultMessage) {
    const errMsg = error.response?.data?.message || defaultMessage;
    throw new Error(errMsg, { cause: error });
  }

  async loginAdmin(form) {
    try {
      const response = await api.post("/login", form);
      return { data: response.data, token: response.token };
    } catch (loginError) {
      this.handleError(loginError, "Failed to login.");
    }
  }

  async logoutAdmin() {
    try {
      const response = await api.post(`/logout`);
      return response.data;
    } catch (logoutError) {
      this.handleError(logoutError, "Failed to logout.");
    }
  }

  async createAdmin(form) {
    try {
      const response = await api.post("/enroll", form);
      return response.data;
    } catch (createError) {
      this.handleError(createError, "Failed to register.");
    }
  }
}

export default new authService();
