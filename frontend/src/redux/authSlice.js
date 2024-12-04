import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user : null,
  },
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setUser : (state) => {
      state.user = true
    }
  },
});


export const {setLoading, setUser} = authSlice.actions;
export default authSlice.reducer;