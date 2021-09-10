import classNames from 'classnames';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { editorActions } from '../../store/editor';
import { examInput } from '../../util/validation';

import Title from '../../components/Title';
import ProjectSidebar from '../../components/ProjectSidebar';
import InfoSidebar from '../../components/InfoSidebar';
import FormInput from '../../components/FormInput';

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
  errorMessage,
} from './index.module.css';

const data = {
  category: '科技類',
  successRate: 78.3,
  goal: 30000,
  avgDescribeLen: 57,
  avgContentLen: 375,
};

const Editor = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const editorState = useSelector(state => state.editor);
  const { changeForm } = editorActions; // redux action destruction

  const inputChangeHandler = ({ key, value, type }) => {
    dispatch(changeForm({ key, value, type }));
  };

  const inputBlurHandler = ({ key, value, inputType, type }) => {
    const isValid = examInput(inputType, value);
    dispatch(changeForm({ key, value: isValid, type }));
  };

  return (
    <div className={container}>
      <ProjectSidebar />
      <InfoSidebar data={data} />
      <form className={formWrapper}>
        <Title>Project {params.id}</Title>
        <section className={sectionWrapper}>
          <h3 className={subTitle}>基本資料</h3>
          <div className={formRow}>
            <label className={classNames(formName, { [errorMessage]: !editorState.name.isValid })}>專案名稱</label>
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
              <label className={classNames(formName, { [errorMessage]: !editorState.goal.isValid })}>目標金額</label>
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
              <label className={classNames(formName, { [errorMessage]: !editorState.category.isValid })}>
                專案類別
              </label>
              <FormInput
                onChange={inputChangeHandler}
                onBlur={inputBlurHandler}
                type={'category'}
                value={editorState.category.value}
                isValid={editorState.category.isValid}
                inputType={'text'}
              />
            </div>
            <div className={flexItem}>
              <label className={classNames(formName, { [errorMessage]: !editorState.type.isValid })}>專案性質</label>
              <FormInput
                onChange={inputChangeHandler}
                onBlur={inputBlurHandler}
                type={'type'}
                value={editorState.type.value}
                isValid={editorState.type.isValid}
                inputType={'text'}
              />
            </div>
          </div>
          <div className={formRow}>
            <label className={formName}>贊助時程</label>
            <input className={classNames(formInput, full)} type='text'></input>
          </div>
          <div className={formRow}>
            <label className={classNames(formName, { [errorMessage]: !editorState.intro.isValid })}>專案簡介</label>
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
                <input className={formInput} type='checkbox'></input>
                <label className={formName}>網頁</label>
              </div>
              <div className={checkbox}>
                <input className={formInput} type='checkbox'></input>
                <label className={formName}>Facebook</label>
              </div>
              <div className={checkbox}>
                <input className={formInput} type='checkbox'></input>
                <label className={formName}>Instagram</label>
              </div>
              <div className={checkbox}>
                <input className={formInput} type='checkbox'></input>
                <label className={formName}>Youtube</label>
              </div>
            </div>
          </div>
        </section>
        <section className={sectionWrapper}>
          <h3 className={subTitle}>贊助方案</h3>
          <div className={classNames(formRow, flex)}>
            <div className={flexItem}>
              <label className={classNames(formName, { [errorMessage]: !editorState.donateNum.isValid })}>
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
              <label className={classNames(formName, { [errorMessage]: !editorState.donateMaxAmount.isValid })}>
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
              <label className={classNames(formName, { [errorMessage]: !editorState.donateMinAmount.isValid })}>
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
          <h3 className={classNames(subTitle, { [errorMessage]: !editorState.content.isValid })}>專案內文</h3>
          <FormInput
            className={contentInput}
            onChange={inputChangeHandler}
            onBlur={inputBlurHandler}
            type={'content'}
            value={editorState.content.value}
            isValid={editorState.content.isValid}
            inputType={'text'}
          />
        </section>
      </form>
    </div>
  );
};

export default Editor;
