import React, { useState } from "react";
import {
  TextInput,
} from "react-native";



const MTextInput = props => (
  <TextInput style = {{
    minWidth: 50,
    minHeight: 50,
    marginVertical: 2,
    fontSize: 20,
    backgroundColor: "#EBF2F5",
    paddingHorizontal: 5,
    flex: 1,
    height: "100%",
  }} placeholder = {props.placeholder}/>
)

export default MTextInput