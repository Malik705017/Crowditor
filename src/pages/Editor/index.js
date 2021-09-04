import { useParams } from 'react-router-dom';

import Title from '../../components/Title';
import Sidebar from '../../components/Sidebar';

import { container } from './index.module.css';

const Editor = () => {
  const params = useParams();
  return (
    <div className={container}>
      <Title>Project {params.id}</Title>
      <Sidebar />
    </div>
  );
};

export default Editor;
