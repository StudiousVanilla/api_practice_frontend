import {BrowserRouter as Router, Route} from 'react-router-dom'
import LOTR from './components/LOTR'
import LOTRCover from './components/LOTRCover'

function App() {
  return (
    <div>
      <Router>
        <Route exact path = '/'>
          <LOTRCover/>
        </Route>
        <Route path = '/quotes'>
          <LOTR/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
