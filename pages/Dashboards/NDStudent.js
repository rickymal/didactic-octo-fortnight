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


const constants = {
    profileSize: 45,
};

const s = StyleSheet.create({
  textViewTitle: {
    fontSize: constants.profileSize - 10,
  },
});

const Circle = props => {

    let back = "transparent"

    let textInputInfo = null
    let opacityView = 1
    


    if (props.newTeam){
        back = 'green'
        textInputInfo = "+"
        opacityView = 0.5
        
    } else if(props.textInput) {
        textInputInfo = props.textInput
    } else {
        textInputInfo = null
    }

    return (
        <TouchableOpacity
            style={{
            minWidth: constants.profileSize,
            minHeight: constants.profileSize,
            maxWidth: constants.profileSize,
            maxHeight: constants.profileSize,
            borderRadius: constants.profileSize,
            backgroundColor: back,
            marginHorizontal : 10,
            borderWidth : 1,
            borderColor : Gstyles.color.primary,
            justifyContent : 'center',
            alignItems : 'center',
            opacity : opacityView,
            ...props.style
            }}
        >{textInputInfo ? <Text style = {{fontSize : 30,}}>{textInputInfo}</Text> : null}</TouchableOpacity>
        )
}


const Profile = (props) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 10,
    }}
  >
    <Text style={s.textViewTitle}>Usuário</Text>
    <Circle/>
  </View>
);

const Header = (props) => (
  <View
    style={{
      flex: 1,
      backgroundColor: "transparent",
      maxHeight: 300,
      flexDirection: "row",
      justifyContent: "space-between",
      alignContent: "center",
      alignItems: "center",
    }}
  >


    <Text style={s.textViewTitle}>Equipes</Text>
    <Profile />
  </View>
);


const buttonStyle = {
    marginVertical : 10,
    minWidth : 70,
    maxWidth : 70,
    minHeight : 70,
    maxHeight : 70,
}

const TeamList = props => (
    <SafeAreaView style = {{flexDirection : 'row', flexWrap : 'wrap', justifyContent : 'center'}}>
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
    </SafeAreaView>
)

const Dashboard = (props) => (
  <View
    style={{ flexDirection: "column", flex: 6, backgroundColor: "white" }}
  >
      <MTextInput style = {{maxHeight : 20,paddingLeft : 20,}} placeholder = "Buscar equipes"/>
      <TeamList/>

  </View>
);

const NDStudent = (props) => (
  <View style={{ width: "100%", height: "100%", }}>
    <Header />
    <Text style={[s.textViewTitle,{fontSize : 10, color : 'red', alignSelf : 'center', marginBottom :5,}]}>Sem equipe</Text>
    <Dashboard />
  </View>
);

export default NDStudent;
