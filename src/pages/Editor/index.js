import { useParams } from 'react-router-dom';

import Sidebar from '../../components/Sidebar';

import './index.css';

const Editor = () => {
  const params = useParams();
  return (
    <div className='editor-container'>
      <h1 className='subtitle absolute'> Project {params.id}</h1>
      <Sidebar className='absolute' />
    </div>
  );
};

export default Editor;
