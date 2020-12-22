import Header from "../../../components/Header";
import {
  ScrollView,
  FlatList,
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity
} from "react-native";

import axios from '../../../services/api'


import React, { useState, useEffect } from "react";
import Gstyles from "../../../components/Gstyles";
import api from "../../../services/api";
const data_input_tests = Array(4).fill({
  title: "Time A",
  date: "07/09/2020",
  time: "13:30h",
  id: 1,
});

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
  textFontTouchable : {fontWeight : 'bold', fontSize : 20,}

});

const Item = ({ title, date, time }) => (
  <TouchableOpacity style={styles.item}>
    <Text style = {styles.textFontTouchable}>Selecionar mentoria</Text>
  </TouchableOpacity>
);

const MentorItem = (props) => (
  <View
    style={[
      styles.item,
      {
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: Gstyles.color.terciary,
        marginBottom : 50,
      },
    ]}
  >
    <Text style={[styles.title, { fontWeight: "bold" }]}>
      Adicionar uma mentoria
    </Text>
  </View>
);

const MentoringList = (props) => {
  return (
    <SafeAreaView style={{ backgroundColor: "transparent", flex: 1 }}>
      <FlatList
        data={data_input_tests}
        renderItem={({ item }) => (
          <Item title={item.title} date={item.date} time={item.time} />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};


const DStudentMainDashboard = (props) => {

  function handle(){
    api.get("test").then(function(e){
      alert(e.data);
      alert(e.status);
    })

    alert('handleado')


  }

  useEffect(() => handle(), [])  



  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Header title="Menu" />
      <MentoringList isMentor />
    </View>
  );
}

export default DStudentMainDashboard;
