import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Warehouses from './components/Warehouses/Warehouses';
import Inventory from './components/Inventory/Inventory';
import InventoryItemDetails from './components/InventoryItemDetails/InventoryItemDetails';
import WarehouseDetails from './components/WarehouseDetails/WarehouseDetails';
import InventoryAddItem from './components/InventoryAdd/InventoryAddItem';
import Footer from './components/Footer/Footer';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
            <Route path={["/", "/warehouses"]} exact component={Warehouses}></Route>
            <Route path="/inventory" exact component={Inventory}></Route>
            <Route path="/inventory/:id" component={InventoryItemDetails}></Route>
            <Route path="/inventory/add" component={InventoryAddItem}></Route>
            <Route path="/warehouse/:id/inventory" component={Inventory}></Route>
            <Route path="/warehouse/:id" component={WarehouseDetails}></Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
