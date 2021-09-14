import { apiEndpoint } from '../config/api.config';
import { editorActions, initialEditorFormState } from '../store/editor';

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
    dispatch(editoeActions.getForm(initialEditorFormState));
  }
};

export const sendFormData = () => async (_, getState) => {
  try {
    const formData = getState().editorForm;
    const body = {
      content: formData.content.value,
      description: formData.intro.value,
      domain: formData.category.value,
      end_time: formData.endTime.value,
      facebook: formData.media.value.facebook,
      goal: formData.goal.value,
      instagram: formData.media.value.instagram,
      max_set_prices: formData.donateMaxAmount.value,
      min_set_prices: formData.donateMinAmount.value,
      set_count: formData.donateNum.value,
      start_time: formData.startTime.value,
      title: formData.name.value,
      type: formData.type.value,
      website: formData.media.value.website,
      youtube: formData.media.value.youtube,
    };

    const response = await fetch(`${apiEndpoint.estimate}/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'applicaiton/json' },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error('failed to send data to server');
    }
  } catch (error) {
    return error;
  }
};
