import { defineStore } from "pinia";
import axios from "axios";

export const useBranchStore = defineStore({
  id: "branch-store",
  state: () => {
    return {
      branch: [],
    };
  },
  actions: {
    async fetchBranch() {
      try {
        const res = await axios.get("/api/branch");
        this.branch = res.data;
      } catch (err) {
        console.log(err);
      }
    },

    async createBranch(payload: any) {
      try {
        const { area, coordinator } = payload;
        await axios.post("/api/branch", {
          area,
          coordinator,
        });
      } catch (err) {
        console.log(err);
      }
    },

    async updateBranch(payload: any) {
      try {
        const { id, area, coordinator } = payload;
        await axios.put(`/api/branch`, {
          id,
          area,
          coordinator,
        });
      } catch (err) {
        console.log(err);
      }
    },

    async deleteBranch(payload: any) {
      const { id } = payload;
      try {
        await axios.delete(`/api/branch`, {
          data: {
            id,
          },
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {
    branchList: (state) => state.branch,
  },
});
