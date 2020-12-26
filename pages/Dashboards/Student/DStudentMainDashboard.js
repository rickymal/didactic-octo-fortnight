import Header from "../../../components/Header";
import {
  ScrollView,
  FlatList,
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import React, { useState, useEffect } from "react";
import Gstyles from "../../../components/Gstyles";
import api from "../../../services/api";

const data_input_tests_2 = Array(5).fill({
  name : "Selecionar mentorias",
  historyEvent : "mentoringDashboard"
})


const data_input_tests = [
  {
    name : "Criação de times",
    historyEvent : "Teamlist",
  },
  {
    name : "Seleção de mentorias",
    historyEvent : "Mentoringlist",
  },
  {
    name : "Opção de mentoria (teste)",
    historyEvent : "MentoringOptions",
    dataParams : {
      content : 'oi',
    }
  }
]


const data_input_tests2 = [
  {name : "Novo time", history : 'newTeam'},
  {name : "Selecionar mentoria", history : 'mentoringSelection'},
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: Gstyles.color.primary,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  title: {
    fontSize: 25,
  },
  textFontTouchable: { fontWeight: "bold", fontSize: 20 },
});

const Item = (props) => {

  console.log("propriedades importantes")
  console.log(JSON.stringify(props))
  return (
    <TouchableOpacity style={styles.item} onPress = {() => props.navigation.navigate(props.historyEvent, props.dataParams)}> 
      <Text style={styles.textFontTouchable} >{props.name}</Text>
    </TouchableOpacity>
  );
}

const MentoringList = (props) => {

  //alert(JSON.stringify(data_input_tests[0]))
  
  return (
    <SafeAreaView style={{ backgroundColor: "transparent", flex: 1 }}>
      <FlatList
        data={data_input_tests}
        renderItem={(data) => {
          return (
            <TouchableWithoutFeedback>
              <Item name={data.item.name} historyEvent = {data.item.historyEvent}  navigation = {props.navigation}/>
            </TouchableWithoutFeedback>
          )
        }}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const DStudentMainDashboard = (props) => {
  function handle() {
    api.get("test").then(function (e) {
      alert(e.data);
      alert(e.status);
    });
  }

  useEffect(() => handle(), []);

  

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Header title="Menu" />
      <MentoringList isMentor  navigation = {props.navigation} />
    </View>
  );
};

export default DStudentMainDashboard;
