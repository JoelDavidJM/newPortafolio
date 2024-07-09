import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: 'project',
  initialState: 'https://idiomarea.onrender.com/idiomas',
  reducers: {
    setChangeG: (state, action) => action.payload
  }
});

export const { setChangeG } = projectSlice.actions;

export default projectSlice.reducer;
