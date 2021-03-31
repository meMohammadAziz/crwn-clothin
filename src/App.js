import "./App.css";
import { Route , Switch } from "react-router-dom";

import Homepage from "./components/pages/homepage.component.jsx";

const hatPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
      <Route exact  path = '/' component = {Homepage}></Route>
      <Route  path = '/hats' component = {hatPage}></Route>
      </Switch>

    </div>
  );
}

export default App;
