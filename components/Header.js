import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
} from "react-native";
import Profile  from './Profile'
// {profileSize : constants.profileSize} props.constants
//45
const Header = (props) => {
    let c = null
    if (!props.constant){
        c = 45
    } else {
        c = props.constant
    }
    return (
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            maxHeight: 120,
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
          }}
        >
      
      
          <Text style={{fontSize: c - 10, marginLeft : 20,}}>{props.title}</Text>
          <Profile constant = {c}/>
        </View>
      );
}

export default Header