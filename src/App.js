import {BrowserRouter as Router, Route} from 'react-router-dom'
import LOTRData from './components/LOTRData'
import LOTRCover from './components/LOTRCover'

function App() {
  return (
    <div>
      <Router>
        <Route exact path = '/'>
          <LOTRCover/>
        </Route>
        <Route path = '/quotes'>
          <LOTRData/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
