import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Warehouses from './components/Warehouses/Warehouses';
import Inventory from './components/Inventory/Inventory';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
            <Route path={["/", "/warehouses"]} exact component={Warehouses}></Route>
            <Route path="/inventory" component={Inventory}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
