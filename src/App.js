import './styles/App.css';
import { ApplicationAccessRoutes } from './Acceses';
import {BrowserRouter} from 'react-router-dom';

function App() {
  let date = new Date()
  let current_year = date.getFullYear()
  return (
    <div className="App">
        <BrowserRouter>
              <ApplicationAccessRoutes year={current_year}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
