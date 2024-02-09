import { DEVICES_ENDPOINTS } from "../enums/endpoints";
import api from "../../services/api";


class DashboardRequests {
    public async getAll() {
      try {
        const response = await api.get(DEVICES_ENDPOINTS.DEVICES);
        const dashboard = response.data;
        return dashboard;
      } catch (error) {
        console.log("ERRO ao obter dados do dashboard", error);
        return "error";
      }
    }

    public async getOn() {
        try {
          const response = await api.get(DEVICES_ENDPOINTS.DEVICES_ON);
          const dashboard = response.data;
          return dashboard;
        } catch (error) {
          console.log("ERRO ao obter dados do dashboard", error);
          return "error";
        }
    }

    public async getOff() {
        try {
          const response = await api.get(DEVICES_ENDPOINTS.DEVICES_OFF);
          const dashboard = response.data;
          return dashboard;
        } catch (error) {
          console.log("ERRO ao obter dados do dashboard", error);
          return "error";
        }
    }

    public async getLastReport() {
        try {
          const response = await api.get(DEVICES_ENDPOINTS.DEVICES_LAST_REPORT);
          const dashboard = response.data;
          return dashboard;
        } catch (error) {
          console.log("ERRO ao obter dados do dashboard", error);
          return "error";
        }
      }

      public async getWarning() {
        try {
          const response = await api.get(DEVICES_ENDPOINTS.DEVICES_WARNING);
          const dashboard = response.data;
          return dashboard;
        } catch (error) {
          console.log("ERRO ao obter dados do dashboard", error);
          return "error";
        }
      }

      public async getCritical() {
        try {
          const response = await api.get(DEVICES_ENDPOINTS.DEVICES_CRITICAL);
          const dashboard = response.data;
          return dashboard;
        } catch (error) {
          console.log("ERRO ao obter dados do dashboard", error);
          return "error";
        }
      }

      public async getBadConfig() {
        try {
          const response = await api.get(DEVICES_ENDPOINTS.DEVICES_BAD_CONFIG);
          const dashboard = response.data;
          return dashboard;
        } catch (error) {
          console.log("ERRO ao obter dados do dashboard", error);
          return "error";
        }
      }
  }
  
  export default new DashboardRequests();