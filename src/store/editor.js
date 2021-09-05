import { createSlice } from '@reduxjs/toolkit';

const initialEditorFormState = {
  name: { value: '', isValid: true },
  goal: { value: 0, isValid: true },
  category: { value: '', isValid: true },
  type: { value: '', isValid: true },
  startTime: { value: '', isValid: true },
  endTime: { value: '', isValid: true },
  intro: { value: '', isValid: true },
  media: {
    value: { web: false, facebook: false, instagram: false, youtube: false },
    isValid: true,
  },
  content: {
    value: '',
    isValid: true,
  },
  donateNum: { value: 0, isValid: true },
  donateMaxAmount: { value: 0, isValid: true },
  donateMinAmount: { value: 0, isValid: true },
};

const changeForm = (state, action) => ({
  ...state,
  [action.payload.type]: {
    ...state[action.payload.type],
    [action.payload.key]: action.payload.value,
  },
});

const editorSlice = createSlice({
  name: 'editorForm',
  initialState: initialEditorFormState,
  reducers: {
    changeForm,
  },
});

export const editorActions = editorSlice.actions; // action
export default editorSlice.reducer; // reducer
