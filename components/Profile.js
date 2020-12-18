import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
} from "react-native";

import Circle from './Circle'
const Profile = (props) => (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
      }}
    >
      <Text style={{fontSize: props.constant - 10,}}>Usuário</Text>
      <Circle constant = {props.constant}/>
    </View>
  );


export default Profile