import React, { useContext } from "react";
import { UserContext } from "../Providers/UserProvider";
import { View } from "react-native";
import { NativeRouter, Switch, Route } from 'react-router-native';

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Menu from "./Menu";
import SubMenu from "./SubMenu";
import GameView from './GameView';
import GameViewAI from "./GameViewAI";
import MultiplayerMenu from "./MultiplayerMenu";
import ProgressBar from "./ProgressBar";
import MpView from './MpView';
import JoinRoom from "./JoinRoom";

function Application() {
  const user = useContext(UserContext);
  console.log("aplicacion");
  return (
    user ?
      <NativeRouter>
        <View style={{ backgroundColor: '#ededed', flex: 1 }}>
          <Switch>
            <Route exact path="/" component={Menu} />
            <Route exact path="/SubMenu" component={SubMenu} />
            <Route exact path="/GameView" component={GameView} />
            <Route exact path="/GameViewAI" component={GameViewAI} />
            <Route exact path="/MultiplayerMenu" component={MultiplayerMenu} />
            <Route exact path="/ProgressBar" component={ProgressBar} />
            <Route exact path="/MpView" component={MpView} />
            <Route exact path="/JoinRoom" component={JoinRoom} />
          </Switch>
        </View>
      </NativeRouter>
      :
      <NativeRouter>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/register" component={SignUp} />
        </Switch>
      </NativeRouter>
  );
}

export default Application;
