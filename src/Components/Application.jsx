import React, { useContext } from "react";
import { UserContext } from "../Providers/UserProvider";
import { View } from "react-native";
import { NativeRouter, Switch, Route } from 'react-router-native';

import SignIn from "./SignIn";
import Menu from "./Menu";
import PlaySolo from "./SinglePlayer";
/*
import SignUp from "./SignUp";
import Menu from "./Menu";
import GameView from "./gameView";
import PlayerVsAi from "./PlayerVsAi";
import SubMenu from './subMenu';
import MultiplayerMenu from './multiplayerMenu';
import MultiplayerView from './multiplayerView';
import ProgressBar from './progressBar';
import JoinRoom from './joinRoom';
*/

function Application() {
  const user = useContext(UserContext);
  return (
    user ?
      <NativeRouter>
        <View>
          <Switch>
            <Route exact path="/" component={Menu}/>
            <Route exact path="/PlaySolo" component = {PlaySolo}/>
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
