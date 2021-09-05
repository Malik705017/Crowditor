const isFilled = value => {
  return value !== '';
};

export const examInput = (inputType, value) => {
  if (inputType === 'text') {
    return isFilled(value);
  }
  return true;
};
