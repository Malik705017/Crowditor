import classNames from 'classnames';

import { useParams } from 'react-router-dom';

import Title from '../../components/Title';
import ProjectSidebar from '../../components/ProjectSidebar';
import InfoSidebar from '../../components/InfoSidebar';

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
  return (
    <div className={container}>
      <ProjectSidebar />
      <InfoSidebar data={data} />
      <form className={formWrapper}>
        <Title>Project {params.id}</Title>
        <section className={sectionWrapper}>
          <h3 className={subTitle}>基本資料</h3>
          <div className={formRow}>
            <label className={formName}>專案名稱</label>
            <input className={classNames(formInput, full)} type='text'></input>
          </div>
          <div className={classNames(formRow, flex)}>
            <div className={flexItem}>
              <label className={formName}>目標金額</label>
              <input className={formInput} type='text'></input>
            </div>
            <div className={flexItem}>
              <label className={formName}>專案類別</label>
              <input className={formInput} type='text'></input>
            </div>
            <div className={flexItem}>
              <label className={formName}>專案性質</label>
              <input className={formInput} type='text'></input>
            </div>
          </div>
          <div className={formRow}>
            <label className={formName}>贊助時程</label>
            <input className={classNames(formInput, full)} type='text'></input>
          </div>
          <div className={formRow}>
            <label className={formName}>專案簡介</label>
            <input className={classNames(formInput, full)} type='text'></input>
          </div>
          <div className={formRow}>
            <label className={formName}>社群媒體</label>
          </div>
        </section>
        <section className={sectionWrapper}>
          <h3 className={subTitle}>贊助方案</h3>
          <div className={classNames(formRow, flex)}>
            <div className={flexItem}>
              <label className={formName}>贊助方案數</label>
              <input className={formInput} type='text'></input>
            </div>
            <div className={flexItem}>
              <label className={formName}>最高贊助金額</label>
              <input className={formInput} type='text'></input>
            </div>
            <div className={flexItem}>
              <label className={formName}>最低贊助金額</label>
              <input className={formInput} type='text'></input>
            </div>
          </div>
        </section>
        <section className={sectionWrapper}>
          <h3 className={subTitle}>專案內文</h3>
          <input className={classNames(formInput, contentInput)} type='text'></input>
        </section>
      </form>
    </div>
  );
};

export default Editor;
