import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import MTextInput from "../../components/MTextInput";
import Gstyles from "../../components/Gstyles";
import Header from "../../components/Header";
import { AsyncStorage } from 'react-native'
const data_backend = Array(5).fill({
  name: "Desafio Catamarã",
  enterprise: "Catamaranderson",
  descripton: "this is a description",
});

const s = StyleSheet.create({
  listChallengeOption: {},
  TextOption: {
    minWidth: 10,
    minHeight: 10,
    backgroundColor: Gstyles.color.terciary,
    borderRadius: 3,
    fontSize: 20,
    marginVertical: 10,
  },
});
import api from "../../services/api";
import { useNavigation } from '@react-navigation/native'

function handleChallengeSelection(name, enterprise, description, history) {
  
  
  
  api
  .put("create_team/", { name, enterprise, description })
  .then(async function (result) {
    alert("Time criado com sucesso")
    await AsyncStorage.setItem('with_team',true)
    history.goBack()
  });
}

const DChallengeList = (props) => {
  const history = useNavigation()
  alert("Extern")
  alert(JSON.stringify(history))
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <View stlye={s.listChallengeOption}>
        {data_backend.map(function (e) {
          return (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: Gstyles.color.secondary,
                marginVertical: 10,
                borderRadius: 5,
                marginHorizontal: 10,
                alignContent: "center",
                alignItems: "center",
                marginVertical: 10,
              }}
              onPress={() =>
                handleChallengeSelection(e.name, e.enterprise, e.descripton, history)
              }
            >
              <Text style={s.TextOption}>{e.name}</Text>
              <Text style={s.TextOption}>{e.enterprise}</Text>
              <Text style={s.TextOption}>{e.descripton}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

export default DChallengeList;
