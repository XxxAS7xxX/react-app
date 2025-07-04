
import '../styles/App.css';
import {useRoutes} from 'react-router-dom';
import Home from './Home';
import Form from './Form';
import Fiche from './Fiche';
import About from './About';


const App = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/Contact', element:<div id='html-form'><Form /></div>},
    { path:'/animal/:id', element:<Fiche />},
    { path:'/about', element:<About />},
  ]);

return routes;
};

export default App;
