import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Warehouses from './components/Warehouses/Warehouses';
import Inventory from './components/Inventory/Inventory';
import InventoryItemDetails from './components/InventoryItemDetails/InventoryItemDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
            <Route path={["/", "/warehouses"]} exact component={Warehouses}></Route>
            <Route path="/inventory" exact component={Inventory}></Route>
            <Route path="/inventory/:id" component={InventoryItemDetails}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
