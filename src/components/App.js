
import '../styles/App.css';
import {useRoutes} from 'react-router-dom';
import Home from './Home';
import Form from './Form';
import Fiche from './Fiche';


const App = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/Contact', element:<div id='html-form'><Form /></div>},
    { path:'/animal/:id', element:<Fiche />},
  ]);

return routes;
};

export default App;
