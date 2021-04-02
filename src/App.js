import "./App.css";
import { Route , Switch } from "react-router-dom";

import Homepage from "./components/pages/homepage/homepage.component";
import ShopPage from './components/pages/shop/shop.component'


function App() {
  return (
    <div>
      <Switch>
      <Route exact  path = '/' component = {Homepage}></Route>
      <Route  path = '/shop' component = {ShopPage}></Route>
      </Switch>

    </div>
  );
}

export default App;
