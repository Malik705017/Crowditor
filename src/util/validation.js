const isFilled = value => {
  return value !== '';
};

export const isNumber = input => {
  const re = /^[0-9] .?[0-9]*/; //判斷字串是否為數字//判斷正整數/[1−9] [0−9]∗]∗/
  if (!re.test(input)) {
    return false;
  }
  return true;
};

export const examInput = (inputType, value) => {
  if (inputType === 'text') {
    return isFilled(value);
  }
  return true;
};
