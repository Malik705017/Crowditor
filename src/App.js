import { Route } from 'react-router-dom';

import { appPath } from './config/routing.config';
import Editor from './pages/Editor';
import LandingPage from './pages/LandingPage';
import ResultPage from './pages/Result';
import Overview from './pages/Overview';

import globalStyles from './App.module.css';

function App() {
  return (
    <div className={globalStyles.App}>
      <Route path={appPath.landing} exact>
        <LandingPage />
      </Route>
      <Route path={appPath.overview}>
        <Overview />
      </Route>
      <Route path={`${appPath.editor}/:id`}>
        <Editor />
      </Route>
      <Route path={`${appPath.result}`}>
        <ResultPage />
      </Route>
    </div>
  );
}

export default App;
