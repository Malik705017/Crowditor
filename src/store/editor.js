import { createSlice } from '@reduxjs/toolkit';

export const projectCategoryOptions = [
  '出版',
  '地方創生',
  '插畫漫畫',
  '攝影',
  '教育',
  '時尚',
  '社會',
  '科技',
  '空間',
  '藝術',
  '表演',
  '設計',
  '遊戲',
  '電影動畫',
  '音樂',
  '飲食',
];

export const projectTypeOptions = ['群眾集資', '訂閱式專案'];

export const initialEditorFormState = {
  form: {
    name: { value: '', isValid: true },
    goal: { value: 100000, isValid: true },
    category: { value: '科技', isValid: true },
    type: { value: '群眾集資', isValid: true },
    startTime: { value: new Date().toISOString(), isValid: true },
    endTime: { value: new Date().toISOString(), isValid: true },
    intro: { value: '', isValid: true },
    website: { value: false, isValid: true },
    facebook: { value: false, isValid: true },
    instagram: { value: false, isValid: true },
    youtube: { value: false, isValid: true },
    content: {
      value: '',
      isValid: true,
    },
    donateNum: { value: 10, isValid: true },
    donateMaxAmount: { value: 1000, isValid: true },
    donateMinAmount: { value: 100, isValid: true },
  },
  advice: Object.fromEntries(
    projectCategoryOptions.map(category => [
      category,
      {
        content_length: 1,
        description_length: 1,
        duration_days: 1,
        goal: 100000,
        keywords: [
          {
            document_frequency: 1,
            token: '',
          },
        ],
      },
    ])
  ),
};

const changeForm = (state, action) => ({
  ...state,
  form: {
    ...state.form,
    [action.payload.type]: {
      ...state.form[action.payload.type],
      [action.payload.key]: action.payload.value,
    },
  },
});

const getAdvice = (state, action) => ({
  ...state,
  advice: action.payload,
});

const editorSlice = createSlice({
  name: 'editorForm',
  initialState: initialEditorFormState,
  reducers: {
    changeForm,
    getAdvice,
  },
});

export const editorActions = editorSlice.actions; // action
export default editorSlice.reducer; // reducer
