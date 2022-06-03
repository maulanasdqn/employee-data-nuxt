import { defineStore } from "pinia";
import axios from "axios";

export const useEmployeeStore = defineStore({
  id: "employee-store",
  state: () => {
    return {
      employee: [],
    };
  },
  actions: {
    async fetchEmployee() {
      try {
        const res = await axios.get("/api/employee");
        this.employee = res.data;
      } catch (err) {
        console.log(err);
      }
    },

    async createEmployee(payload: any) {
      try {
        const { fullname, role, present } = payload;
        await axios.post("/api/employee", {
          fullname,
          role,
          present,
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {
    employeeList: (state) => state.employee,
  },
});
