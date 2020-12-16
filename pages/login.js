import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import MTextInput from '../components/MTextInput'
import Gstyles from '../components/Gstyles'
const options = [
  {
    key: "pay",
  },
  {
    key: "performance",
  },
  {
    key: "aToZ",
  },
];
const s = StyleSheet.create({
  textBaseView: {
    fontWeight: "bold",
    color: Gstyles.color.secondary,
    marginVertical: 20,
  },
  radioCircleButtonViewButtonView: {
    minWidth: 50,
    minHeight: 50,
    borderRadius: 100,
    borderWidth: 2,
    backgroundColor: "white",
    borderColor: Gstyles.color.primary,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  buttonStyle: {
    backgroundColor: Gstyles.color.primary,
    minHeight: 40,
    minWidth: 15,
    fontSize: 15,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  textButtonStyleIn: {
    color: "white",
  },
});

const Square = (props) => (
  <View
    style={{
      backgroundColor: Gstyles.color.primary,
      minHeight: 5,
      minWidth: 5,
      flex: 1,
      maxWidth: 50,
      height: "100%",
    }}
  />
);

const TextBox = (props) => (
  <View
    style={{
      flexDirection: "row",
      marginVertical: 10,
      backgroundColor: "green",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Square />    
    <MTextInput placeholder = {props.placeholder}/>
  </View>
);

const LoginPane = (props) => (
  <View
    style={{
      backgroundColor: "white",
      width: "80%",
      alignItems: "stretch",
      justifyContent: "center",
      marginVertical: 5,
    }}
  >
    <TextBox placeholder="Email" />
    <TextBox placeholder="Senha" />
  </View>
);

const RadioOptionButton = (props) => {
  const [sty, ssty] = useState(s.radioCircleButtonViewButtonView);

  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "white",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {props.options.map(function (e) {
        return <TouchableOpacity key={e.key} style={sty}></TouchableOpacity>;
      })}
    </View>
  );
};

const Login = (props) => (
  <View
    style={{
      height: "100%",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
    }}
  >
    <Text style={s.textBaseView}>Entre com</Text>
    <RadioOptionButton options={options} />
    <LoginPane />
    <TouchableOpacity style={s.buttonStyle}>
      <Text style={s.textButtonStyleIn}>Entre</Text>
    </TouchableOpacity>
    <Text style={s.textBaseView}>ou</Text>
    <Text
      style={{
        ...s.textBaseView,
        ...{ textDecorationLine: "underline", color: Gstyles.color.primary },
      }}
    >
      Registre-se
    </Text>
  </View>
);

export default Login;
