import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import { CharacterInfo } from "../Pages/CharacterInfo/CharacterInfo";
import { Characters } from "../Pages/Characters/Characters";



const Routes: React.FC = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Characters}/>
          <Route path="/character/:id" component={CharacterInfo}/>
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;