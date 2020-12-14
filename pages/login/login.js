import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

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
    color: "#7A7A7A",
    marginVertical: 20,
  },
  radioCircleButtonViewButtonView: {
    minWidth: 50,
    minHeight: 50,
    borderRadius: 100,
    borderWidth: 2,
    backgroundColor: "white",
    borderColor: "#235E9D",
    marginHorizontal: 10,
    marginVertical: 5,
  },
  textBoxInputView: {
    minWidth: 50,
    minHeight: 50,
    marginVertical: 2,
    fontSize: 20,
    backgroundColor: "#EBF2F5",
    paddingHorizontal: 5,
    flex: 1,
    height: "100%",
  },
  buttonStyle: {
    backgroundColor: "#235E9D",
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
      backgroundColor: "#235E9D",
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
    <TextInput
      style={s.textBoxInputView}
      placeholder={props.placeholder}
    ></TextInput>
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
        ...{ textDecorationLine: "underline", color: "#235E9D" },
      }}
    >
      Registre-se
    </Text>
  </View>
);

export default Login;
