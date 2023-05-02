import { createSlice } from "@reduxjs/toolkit";

const workspaceSlice = createSlice({
    name: 'workspace',
    initialState: [],
    reducers: {
        setWorkspace: (state, action) => {
        return action.payload;
        }
    }
  });

export const { setWorkspace } = workspaceSlice.actions;

export const selectWorkspace = (state) => state.setWorkspace;

export default workspaceSlice.reducer;