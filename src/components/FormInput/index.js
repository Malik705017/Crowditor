import classNames from 'classnames';

import { isNumber } from '../../util/validation';

import { formInput, error } from './index.module.css';

const FormInput = ({ onChange, onBlur, type, value, isValid, inputType, className }) => {
  return (
    <input
      className={classNames(className, formInput, {
        [error]: !isValid,
      })}
      type={inputType}
      value={value}
      onChange={e =>
        onChange({
          key: 'value',
          value: isNumber(e.target.value) ? parseInt(e.target.value) : e.target.value,
          type,
        })
      }
      onBlur={() => onBlur({ key: 'isValid', value, type, inputType })}
    ></input>
  );
};

export default FormInput;
