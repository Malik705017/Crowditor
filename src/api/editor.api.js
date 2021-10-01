import { apiEndpoint } from '../config/api.config';
import { editorActions, initialEditorFormState } from '../store/editor';
import { getResultData } from './result.api';

export const getFormData = id => async dispatch => {
  try {
    const response = await fetch(`${apiEndpoint.estimate}/${id}`);
    const parseData = await response.json();

    if (!response.ok) throw new Error('failed to get data from server');

    const formData = {
      name: { value: parseData.title, isValid: true },
      goal: { value: parseData.goal, isValid: true },
      category: { value: parseData.domain, isValid: true },
      type: { value: parseData.type, isValid: true },
      startTime: { value: parseData.start_time, isValid: true },
      endTime: { value: parseData.end_time, isValid: true },
      intro: { value: parseData.description, isValid: true },
      media: {
        value: {
          web: parseData.website,
          facebook: parseData.facebook,
          instagram: parseData.instagram,
          youtube: parseData.youtube,
        },
        isValid: true,
      },
      content: {
        value: parseData.content,
        isValid: true,
      },
      donateNum: { value: parseData.set_count, isValid: true },
      donateMaxAmount: { value: parseData.max_set_prices, isValid: true },
      donateMinAmount: { value: parseData.min_set_prices, isValid: true },
    };

    dispatch(editorActions.getForm(formData));
  } catch (error) {
    dispatch(editorActions.getForm(initialEditorFormState));
  }
};

export const getAdvice = () => async dispatch => {
  try {
    const response = await fetch(apiEndpoint.advice);
    const parseData = await response.json();

    if (!response.ok) throw new Error('failed to get data from server');

    dispatch(editorActions.getAdvice(parseData.data));
  } catch (error) {
    console.log(error);
  }
};

export const sendFormData = curFormIndex => async (dispatch, getState) => {
  try {
    const formData = getState().editor.formList[curFormIndex];

    const body = {
      content: formData.content.value,
      description: formData.intro.value,
      domain: formData.category.value,
      end_time: formData.endTime.value,
      facebook: formData.facebook.value,
      goal: formData.goal.value,
      instagram: formData.instagram.value,
      max_set_prices: formData.donateMaxAmount.value,
      min_set_prices: formData.donateMinAmount.value,
      set_count: formData.donateNum.value,
      start_time: formData.startTime.value,
      title: formData.name.value,
      type: formData.type.value,
      website: formData.website.value,
      youtube: formData.youtube.value,
    };

    const response = await fetch(apiEndpoint.estimate, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error('failed to send data to server');
    }

    const estimation = await response.json();
    dispatch(getResultData(estimation));
  } catch (error) {
    return error;
  }
};
