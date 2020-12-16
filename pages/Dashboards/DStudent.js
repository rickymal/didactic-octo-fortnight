import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { FlatList, SafeAreaView } from "react-native";

import Gstyles from "../../components/Gstyles";
import MTextInput from "../../components/MTextInput";

const s = StyleSheet.create({
  TextTeamView: {
    fontWeight: "bold",
    color: "#464749",
    fontSize: 25,
    marginHorizontal: 10,
  },
  buttonUserInfoStyle: {
    backgroundColor: Gstyles.color.terciary,
    minHeight: 70,
    maxHeight: 70,
    minWidth: 15,
    maxWidth: 70,
    maxHeight: 70,
    fontSize: 15,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 70,
    marginHorizontal: 10,
  },
  listItemView: {
    alignItems: "center",
    backgroundColor: Gstyles.color.terciary,
    flexGrow: 1,
    margin: 4,
    padding: 20,
    flexBasis: 0,
    borderRadius: 100,
    maxWidth: 70,
    minHeight: 70,
    justifyContent: "center",
  },
  listTextView: {
    color: "#333333",
  },
});

const UserInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      marginVertical: 0,
    }}
  >
    <Text style={{ fontWeight: "bold", fontSize: 15 }}>Usuário</Text>
    <TouchableOpacity style={s.buttonUserInfoStyle} />
  </View>
);

const HeaderMain = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      height: "100%",
    }}
  >
    <Text style={s.TextTeamView}>Equipes</Text>
    <UserInfo />
  </View>
);

// =======================

const data = {
  hasTeam: false,
  teamListInfo: [
    {
      id: "1",
      initials: "T01",
      name: "Time de teste",
    },
    {
      id: "2",
      initials: "T02",
      name: "Time de teste",
    },
    {
      id: "3",
      initials: "T03",
      name: "Time de teste",
    },
    {
      id: "4",
      initials: "T04",
      name: "Time de teste",
    },
    {
      id: "5",
      initials: "T05",
      name: "Time de teste",
    },
  ],
};

const HeaderTeamInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 10,
      flex: 1,
      maxHeight: 50,
      alignItems: "center",
      backgroundColor: Gstyles.color.backGround,
      marginVertical: 10,
    }}
  >
    {data.hasTeam ? (
      data.teamName
    ) : (
      <Text style={{ color: "red", fontSize: 20, marginHorizontal: 10 }}>
        Sem time
      </Text>
    )}
    <Text
      style={{
        color: Gstyles.color.secondary,
        fontSize: 20,
        marginHorizontal: 10,
      }}
    >
      Criar Equipe (+)
    </Text>
  </View>
);

function createRows(data, columns) {
  const rows = Math.floor(data.length / columns); // [A]
  let lastRowElements = data.length - rows * columns; // [B]
  while (lastRowElements !== columns) {
    // [C]
    data.push({
      // [D]
      id: `empty-${lastRowElements}`,
      name: `empty-${lastRowElements}`,
      empty: true,
    });
    lastRowElements += 1; // [E]
  }
  return data; // [F]
}

const numberOf_columns = 4;

const TeamDashboard = (props) => (
  <View style={{ flex: 1 }}>
    <MTextInput
      placeholder="Procurar times..."
      style={{
        maxHeight: 20,
        marginHorizontal: 5,
        marginVertical: 5,
        paddingLeft: 20,
      }}
    />
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={createRows(data.teamListInfo, numberOf_columns)}
        keyExtractor={(e) => e.id}
        numColumns={numberOf_columns}
        renderItem={({ item }) =>
          !item.empty ? (
            <View style={s.listItemView}>
              <Text style={s.listTextView}>{item.initials}</Text>
            </View>
          ) : (
            <View
              style={[s.listItemView, { backgroundColor: "transparent" }]}
            ></View>
          )
        }
      />
    </SafeAreaView>
  </View>
);
const DStudent = (props) => (
  <View
    style={{
      width: "100%",
      height: "100%",
      backgroundColor: Gstyles.color.backGround,
    }}
  >
    <View style={{ flex: 1, alignContent: "center", justifyContent: "center" }}>
      <HeaderMain />
    </View>

    <View style={{ flex: 6, backgroundColor: "white" }}>
      <HeaderTeamInfo />
      <TeamDashboard />
    </View>
  </View>
);

export default DStudent;
