import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SurveyForm from './components/Surveys';

import sampleData from './assets/sample.json';
import spiData from './assets/spi.json';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        {/* <Route to="/report">
          <h1>REPORT</h1>
        </Route> */}
        <Route path="/surveys/sensory-preferences">
          <SurveyForm data={spiData}/>
        </Route>
        <Route path="/surveys/sample">
          <SurveyForm data={sampleData}/>
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route>
          <h1>Resource Not Found</h1>
        </Route>
      </Switch>
      <footer>
        <p>&copy; Copyright ..........</p>
      </footer>
    </>
  );
}

export default App;
