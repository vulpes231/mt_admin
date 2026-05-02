import api from "../constant/APIClient";

class authService {
  constructor() {
    this.handleError = this.handleError.bind(this);
    this.loginAdmin = this.loginAdmin.bind(this);
    this.logoutAdmin = this.logoutAdmin.bind(this);
    this.createAdmin = this.createAdmin.bind(this);
  }

  handleError(error, defaultMessage) {
    const errMsg = error.response?.data?.message || defaultMessage;
    throw new Error(errMsg, { cause: error });
  }

  async loginAdmin(form) {
    try {
      const response = await api.post("/manage-admin/login", form);
      // console.log(response);
      return { data: response.data.data, token: response.data.token };
    } catch (loginError) {
      this.handleError(loginError, "Failed to login.");
    }
  }

  async logoutAdmin() {
    try {
      const response = await api.put(`/logout`);
      return response.data;
    } catch (logoutError) {
      this.handleError(logoutError, "Failed to logout.");
    }
  }

  async createAdmin(form) {
    try {
      const response = await api.post("/manage-admin/register", form);
      return response.data;
    } catch (createError) {
      this.handleError(createError, "Failed to register.");
    }
  }
}

export default new authService();
