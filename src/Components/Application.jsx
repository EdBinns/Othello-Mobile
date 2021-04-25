import React, { useContext } from "react";
import { Router } from "@reach/router";
import { UserContext } from "../Providers/UserProvider";
import SignIn from "./SignIn";
import Hola from "./Hola"
import { View , Text } from "react-native";
import { NativeRouter, Switch, Route, Link } from 'react-router-native';
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
            <Route exact path="/" component={SignIn} />
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
