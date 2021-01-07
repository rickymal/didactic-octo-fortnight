import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import MTextInput from "../../components/MTextInput";
import Gstyles from "../../components/Gstyles";
import Header from "../../components/Header";

const data_backend = Array(5).fill({
  name: "Gorila",
  enterprise: "conpunter",
  descripton: "this is a description",
});

const s = StyleSheet.create({
  listChallengeOption: {},
  TextOption: {
    minWidth: "10px",
    minHeight: "10px",
    backgroundColor: Gstyles.color.terciary,
    borderRadius : 3,
  },
});

const DChallengeList = (props) => (
  <View style={{ width: "100%", height: "100%" }}>
    <View stlye={s.listChallengeOption}>
      {data_backend.map(function (e) {
        return (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: Gstyles.color.secondary,
              marginVertical: 10,
              borderRadius: 5,
              marginHorizontal: 10,
            }}
          >
            <Text style={s.TextOption}>{e.name}</Text>
            <Text style={s.TextOption}>{e.enterprise}</Text>
            <Text style={s.TextOption}>{e.descripton}</Text>
          </View>
        );
      })}
    </View>
  </View>
);

export default DChallengeList;
