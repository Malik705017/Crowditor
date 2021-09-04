import { Route } from 'react-router-dom';

import { appPath } from './config/routing.config';
import Editor from './pages/Editor';
import LandingPage from './pages/LandingPage';
import Overview from './pages/Overview';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Route path={appPath.landing} exact>
        <LandingPage />
      </Route>
      <Route path={appPath.overview}>
        <Overview />
      </Route>
      <Route path={`${appPath.editor}/:id`}>
        <Editor />
      </Route>
    </div>
  );
}

export default App;
