import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView
} from "react-native";

import { FlatList, SafeAreaView } from "react-native";

import Gstyles from "../../../components/Gstyles";
import MTextInput from "../../../components/MTextInput";
import Header from '../../../components/Header'
import Circle from '../../../components/Circle'

const constants = {
    profileSize: 45,
};

const s = StyleSheet.create({
  textViewTitle: {
    fontSize: constants.profileSize - 10,
  },
});



const buttonStyle = {
    marginVertical : 10,
    minWidth : 70,
    maxWidth : 70,
    minHeight : 70,
    maxHeight : 70,
    borderRadius : 20,
}

const TeamList = props => (
  <ScrollView>
    <View style = {{flexDirection : 'row', flexWrap : 'wrap', justifyContent : 'center'}}>

          <Circle style = {buttonStyle} newTeam/>
          <Circle style = {buttonStyle} textInput = "T1"/>
          <Circle style = {buttonStyle} textInput = "T1"/>
          <Circle style = {buttonStyle} textInput = "T1"/>
          <Circle style = {buttonStyle} textInput = "T1"/>
          <Circle style = {buttonStyle} textInput = "T1"/>
          <Circle style = {buttonStyle} textInput = "T1"/>
          <Circle style = {buttonStyle} textInput = "T1"/>
          <Circle style = {buttonStyle} textInput = "T1"/>
          <Circle style = {buttonStyle} textInput = "T1"/>
          <Circle style = {buttonStyle} textInput = "T1"/>
          <Circle style = {buttonStyle} textInput = "T1"/>
          <Circle style = {buttonStyle} textInput = "T1"/>
          <Circle style = {buttonStyle} textInput = "T1"/>
          <Circle style = {buttonStyle} textInput = "T1"/>
          <Circle style = {buttonStyle} textInput = "T1"/>
          <Circle style = {buttonStyle} textInput = "T1"/>
          <Circle style = {buttonStyle} textInput = "T1"/>
          <Circle style = {buttonStyle} textInput = "T1"/>
          <Circle style = {buttonStyle} textInput = "T1"/>
          <Circle style = {buttonStyle} textInput = "T1"/>
          <Circle style = {buttonStyle} textInput = "T1"/>
          <Circle style = {buttonStyle} textInput = "T1"/>
          <Circle style = {buttonStyle} textInput = "T1"/>
          <Circle style = {buttonStyle} textInput = "T1"/>
          <Circle style = {buttonStyle} textInput = "T1"/>
          <Circle style = {buttonStyle} textInput = "T1"/>
          <Circle style = {buttonStyle} textInput = "T1"/>
          <Circle style = {buttonStyle} textInput = "T1"/>
          <Circle style = {buttonStyle} textInput = "T1"/>
          <Circle style = {buttonStyle} textInput = "T1"/>
          <Circle style = {buttonStyle} textInput = "T1"/>
          <Circle style = {buttonStyle} textInput = "T1"/>

    </View>

  </ScrollView>
)

const Dashboard = (props) => (
  <View
    style={{ flexDirection: "column", flex: 6, backgroundColor: "white" }}
  >
      <MTextInput style = {{maxHeight : 20,paddingLeft : 20,}} placeholder = "Buscar equipes"/>
      <TeamList/>

  </View>
);

const DStudentTeamList = (props) => (
  <View style={{ width: "100%", height: "100%", }}>
    <Header constant = {constants.profileSize} title = "Equipes" />
    <Text style={[s.textViewTitle,{fontSize : 10, color : 'red', alignSelf : 'center', marginBottom :5,}]}>Você não está em uma equipe</Text>
    <Dashboard/>
  </View>
);

export default DStudentTeamList;
