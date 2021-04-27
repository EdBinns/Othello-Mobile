import React, { useContext } from "react";
import { UserContext } from "../Providers/UserProvider";
import { View } from "react-native";
import { NativeRouter, Switch, Route } from 'react-router-native';

import SignIn from "./SignIn";
import Menu from "./Menu";
import SinglePlayer from "./SubMenu";
import SubMenu from "./SubMenu";
import GameView from './GameView';

function Application() {
  const user = useContext(UserContext);
  return (
    user ?
      <NativeRouter>
        <View>
          <Switch>
            <Route exact path="/" component={Menu}/>
            <Route exact path="/SubMenu" component={SubMenu}/>
            <Route exact path="/GameView" component = {GameView}/>
          </Switch>
        </View>
      </NativeRouter>
      :
      <NativeRouter>
        <Switch>
          <Route exact path="/" component={SignIn}/>
        </Switch>
      </NativeRouter>
  );
}

export default Application;
