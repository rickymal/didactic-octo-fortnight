import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
} from "react-native";
import Profile  from './Profile'
// {profileSize : constants.profileSize} props.constants
const Header = (props) => (
    <View
      style={{
        flex: 1,
        backgroundColor: "transparent",
        maxHeight: 300,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
      }}
    >
  
  
      <Text style={{fontSize: props.constant - 10,}}>{props.teamName}</Text>
      <Profile constant = {props.constant}/>
    </View>
  );

export default Header