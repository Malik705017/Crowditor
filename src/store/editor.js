import { createSlice } from "@reduxjs/toolkit";

export const initialEditorFormState = {
  name: { value: "", isValid: true },
  goal: { value: 100000, isValid: true },
  category: { value: "出版", isValid: true },
  type: { value: "群眾集資", isValid: true },
  startTime: { value: new Date().toISOString(), isValid: true },
  endTime: { value: new Date().toISOString(), isValid: true },
  intro: { value: "", isValid: true },
  website: { value: false, isValid: true },
  facebook: { value: false, isValid: true },
  instagram: { value: false, isValid: true },
  youtube: { value: false, isValid: true },
  content: {
    value: "",
    isValid: true
  },
  donateNum: { value: 10, isValid: true },
  donateMaxAmount: { value: 1000, isValid: true },
  donateMinAmount: { value: 100, isValid: true }
};

const changeForm = (state, action) => ({
  ...state,
  [action.payload.type]: {
    ...state[action.payload.type],
    [action.payload.key]: action.payload.value
  }
});

const editorSlice = createSlice({
  name: "editorForm",
  initialState: initialEditorFormState,
  reducers: {
    changeForm
  }
});

export const editorActions = editorSlice.actions; // action
export default editorSlice.reducer; // reducer
