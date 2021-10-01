import { useEffect } from 'react';
import classNames from 'classnames';

import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DateTimePicker from 'react-datetime-picker';

import { editorActions, projectCategoryOptions, projectTypeOptions } from '../../store/editor';
import { examInput } from '../../util/validation';
import { sendFormData, getAdvice } from '../../api/editor.api';

import Title from '../../components/Title';
import ProjectSidebar from '../../components/ProjectSidebar';
import InfoSidebar from '../../components/InfoSidebar';
import FormInput from '../../components/FormInput';

import Facebook from '../../resources/svg/facebook';
import Instagram from '../../resources/svg/instagram';
import Webpage from '../../resources/svg/webpage';
import Youtube from '../../resources/svg/youtube';

import {
  container,
  formWrapper,
  sectionWrapper,
  subTitle,
  formRow,
  formName,
  formInput,
  full,
  flex,
  flexItem,
  contentInput,
  checkboxes,
  checkbox,
  selectBox,
  selectBoxArrow,
  errorMessage,
  duration,
  timePicker,
  startButton,
  error,
  center,
} from './index.module.css';

const Editor = () => {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const curFormIndex = useSelector(state => state.editor.curFormIndex);
  const editorState = useSelector(state => state.editor.formList[curFormIndex]);
  const adviceState = useSelector(state => state.editor.advice);
  const { changeForm, changeIndex } = editorActions; // redux action destruction

  console.log('editorState', editorState);

  useEffect(() => {
    dispatch(changeIndex(parseInt(params.id) - 1));
  }, [dispatch, changeIndex, params]);

  useEffect(() => {
    dispatch(getAdvice());
  }, [dispatch]);

  const inputChangeHandler = ({ key, value, type }) => {
    dispatch(changeForm({ key, value, type, curFormIndex }));
  };

  const inputBlurHandler = ({ key, value, inputType, type }) => {
    const isValid = examInput(inputType, value);
    dispatch(changeForm({ key, value: isValid, type, curFormIndex }));
  };

  const sendFormHandler = event => {
    event.preventDefault();
    dispatch(sendFormData(curFormIndex));
    history.push('/result');
  };

  return (
    <div className={container}>
      <ProjectSidebar />
      <InfoSidebar data={adviceState[editorState.category.value]} category={editorState.category.value} />
      <form className={formWrapper}>
        <Title>{editorState.name.value === '' ? 'Project' : editorState.name.value}</Title>
        <section className={sectionWrapper}>
          <h3 className={subTitle}>基本資料</h3>
          <div className={formRow}>
            <label
              className={classNames(formName, {
                [errorMessage]: !editorState.name.isValid,
              })}
            >
              專案名稱
            </label>
            <FormInput
              className={full}
              onChange={inputChangeHandler}
              onBlur={inputBlurHandler}
              type={'name'}
              value={editorState.name.value}
              isValid={editorState.name.isValid}
              inputType={'text'}
            />
          </div>
          <div className={classNames(formRow, flex)}>
            <div className={flexItem}>
              <label
                className={classNames(formName, {
                  [errorMessage]: !editorState.goal.isValid,
                })}
              >
                目標金額
              </label>
              <FormInput
                onChange={inputChangeHandler}
                onBlur={inputBlurHandler}
                type={'goal'}
                value={editorState.goal.value}
                isValid={editorState.goal.isValid}
                inputType={'text'}
              />
            </div>
            <div className={flexItem}>
              <label
                className={classNames(formName, {
                  [errorMessage]: !editorState.category.isValid,
                })}
              >
                專案類別
              </label>
              <div className={selectBox}>
                <select
                  value={editorState.category.value}
                  onChange={e =>
                    inputChangeHandler({
                      key: 'value',
                      value: e.target.value,
                      type: 'category',
                    })
                  }
                >
                  {projectCategoryOptions.map(option => (
                    <option key={`${option}`} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <span className={selectBoxArrow}></span>
              </div>
            </div>
            <div className={flexItem}>
              <label
                className={classNames(formName, {
                  [errorMessage]: !editorState.type.isValid,
                })}
              >
                專案性質
              </label>
              <div className={selectBox}>
                <select
                  value={editorState.type.value}
                  onChange={e =>
                    inputChangeHandler({
                      key: 'value',
                      value: e.target.value,
                      type: 'type',
                    })
                  }
                >
                  {projectTypeOptions.map(option => (
                    <option key={`${option}`} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <span className={selectBoxArrow}></span>
              </div>
            </div>
          </div>
          <div className={formRow}>
            <label className={formName}>贊助時程</label>
            <DateTimePicker
              className={timePicker}
              value={new Date(editorState.startTime.value)}
              onChange={value =>
                inputChangeHandler({
                  key: 'value',
                  value: value.toISOString(),
                  type: 'startTime',
                })
              }
            />
            <span className={duration}>{'~'}</span>
            <DateTimePicker
              className={timePicker}
              value={new Date(editorState.endTime.value)}
              onChange={value =>
                inputChangeHandler({
                  key: 'value',
                  value: value.toISOString(),
                  type: 'endTime',
                })
              }
            />
          </div>
          <div className={formRow}>
            <label
              className={classNames(formName, {
                [errorMessage]: !editorState.intro.isValid,
              })}
            >
              專案簡介
            </label>
            <FormInput
              className={full}
              onChange={inputChangeHandler}
              onBlur={inputBlurHandler}
              type={'intro'}
              value={editorState.intro.value}
              isValid={editorState.intro.isValid}
              inputType={'text'}
            />
          </div>
          <div className={formRow}>
            <label className={formName}>社群媒體</label>
            <div className={checkboxes}>
              <div className={checkbox}>
                <input
                  className={formInput}
                  type='checkbox'
                  checked={editorState.website.value}
                  onChange={() =>
                    inputChangeHandler({
                      key: 'value',
                      value: !editorState.website.value,
                      type: 'website',
                    })
                  }
                ></input>
                <label className={formName}>網頁</label>
                <Webpage/>
              </div>
              <div className={checkbox}>
                <input
                  className={formInput}
                  type='checkbox'
                  checked={editorState.facebook.value}
                  onChange={() =>
                    inputChangeHandler({
                      key: 'value',
                      value: !editorState.facebook.value,
                      type: 'facebook',
                    })
                  }
                ></input>
                <label className={formName}>Facebook</label>
                <Facebook/>
              </div>
              <div className={checkbox}>
                <input
                  className={formInput}
                  type='checkbox'
                  checked={editorState.instagram.value}
                  onChange={() =>
                    inputChangeHandler({
                      key: 'value',
                      value: !editorState.instagram.value,
                      type: 'instagram',
                    })
                  }
                ></input>
                <label className={formName}>Instagram</label>
                <Instagram/>
              </div>
              <div className={checkbox}>
                <input
                  className={formInput}
                  type='checkbox'
                  checked={editorState.youtube.value}
                  onChange={() =>
                    inputChangeHandler({
                      key: 'value',
                      value: !editorState.youtube.value,
                      type: 'youtube',
                    })
                  }
                ></input>
                <label className={formName}>Youtube</label>
                <Youtube/>
              </div>
            </div>
          </div>
        </section>
        <section className={sectionWrapper}>
          <h3 className={subTitle}>贊助方案</h3>
          <div className={classNames(formRow, flex)}>
            <div className={flexItem}>
              <label
                className={classNames(formName, {
                  [errorMessage]: !editorState.donateNum.isValid,
                })}
              >
                贊助方案數
              </label>
              <FormInput
                onChange={inputChangeHandler}
                onBlur={inputBlurHandler}
                type={'donateNum'}
                value={editorState.donateNum.value}
                isValid={editorState.donateNum.isValid}
                inputType={'text'}
              />
            </div>
            <div className={flexItem}>
              <label
                className={classNames(formName, {
                  [errorMessage]: !editorState.donateMaxAmount.isValid,
                })}
              >
                最高贊助金額
              </label>
              <FormInput
                onChange={inputChangeHandler}
                onBlur={inputBlurHandler}
                type={'donateMaxAmount'}
                value={editorState.donateMaxAmount.value}
                isValid={editorState.donateMaxAmount.isValid}
                inputType={'text'}
              />
            </div>
            <div className={flexItem}>
              <label
                className={classNames(formName, {
                  [errorMessage]: !editorState.donateMinAmount.isValid,
                })}
              >
                最低贊助金額
              </label>
              <FormInput
                onChange={inputChangeHandler}
                onBlur={inputBlurHandler}
                type={'donateMinAmount'}
                value={editorState.donateMinAmount.value}
                isValid={editorState.donateMinAmount.isValid}
                inputType={'text'}
              />
            </div>
          </div>
        </section>
        <section className={sectionWrapper}>
          <h3
            className={classNames(subTitle, {
              [errorMessage]: !editorState.content.isValid,
            })}
          >
            專案內文
          </h3>
          <textarea
            className={classNames(contentInput, formInput, {
              [error]: !editorState.content.isValid,
            })}
            onChange={e =>
              inputChangeHandler({
                key: 'value',
                value: e.target.value,
                type: 'content',
              })
            }
            onBlur={e =>
              inputBlurHandler({
                key: 'isValid',
                value: e.target.value,
                type: 'content',
              })
            }
            value={editorState.content.value}
          />
        </section>
        <div className={center}>
          <button className={startButton} onClick={sendFormHandler} type='submit'>
            開始評估
          </button>
        </div>
      </form>
    </div>
  );
};

export default Editor;
