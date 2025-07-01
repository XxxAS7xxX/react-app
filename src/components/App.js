import logo from '../logo.svg';
import '../styles/App.css';
import {useRoutes} from 'react-router-dom';
import Home from './Home';
import Form from './Form';


const App = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/Contact', element:<div id='html-form'><Form /></div>},
  ]);

return routes;
};

export default App;
