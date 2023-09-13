import customFetch from "./axios";

const jobsApi = {
  getAll: (thunkAPI) => {
    const url = "/jobs";
    return customFetch.get(url, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
  },
  get: () => {
    
  },
  delete: () => {
    
  }
};
export default jobsApi;
