import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
  },
  reducers: {
    // actions
    setLoading: (state) => {
      state.loading = true;
    },
  },
});


export const {setLoading} = authSlice.actions;
export default authSlice.reducer;