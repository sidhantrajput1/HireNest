import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
  },
  reducers: {
    // actions
    setLoading: (state, actions) => {
      state.loading = actions.payload;
    },
  },
});


export default authSlice