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

import Gstyles from '../../components/Gstyles'

const s = StyleSheet.create({
  TextTeamView : {
    fontWeight : 'bold',
    color : "#464749",
    fontSize : 25,
    backgroundColor : 'white',
  },
  buttonUserInfoStyle : {
    backgroundColor: Gstyles.color.terciary,
    minHeight: 70,
    maxHeight : 70,
    minWidth: 15,
    maxWidth : 70,
    maxHeight : 70,
    fontSize: 15,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius : 70,
    marginHorizontal : 10,
    
  },
  listItemView : {
    alignItems: "center",
    backgroundColor: Gstyles.color.terciary,
    flexGrow: 1,
    margin: 4,
    padding: 20,
    flexBasis : 0,
    borderRadius : 100,
    maxWidth : 70,
    minHeight : 70,
    justifyContent : 'center',
    
  
  },
  listTextView : {
    color: "#333333"
  }
})


const UserInfo = props => (
  <View style = {{backgroundColor : 'white', flexDirection : 'row', alignItems : 'center',justifyContent : 'flex-end', marginVertical : 0,}}>
    <Text style = {{fontWeight : 'bold', fontSize : 15}}>Usuário</Text>
    <TouchableOpacity style = {s.buttonUserInfoStyle}/>
  </View>
)

const HeaderMain = props => (
  <View style = {{backgroundColor : 'white', flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center', marginVertical : 0,}}>
    <Text style = {s.TextTeamView}>Equipes</Text>
    <UserInfo/>
  </View>
)


// =======================

const data = {
  hasTeam : false,
  teamListInfo : [
    {
      id : "1",
      initials : "TD",
      name : "TIME PICA"
    },
    {
      id : "2",
      initials : "TD",
      name : "TIME PICA"
    },
    {
      id : "3",
      initials : "TD",
      name : "TIME PICA"
    },
    {
      id : "4",
      initials : "TD",
      name : "TIME PICA"
    },
    {
      id : "5",
      initials : "TD",
      name : "TIME PICA"
    },
  ]
}

const HeaderTeamInfo = props => (
  <View style = {{flexDirection : 'row', justifyContent : 'space-between', paddingVertical : 10, backgroundColor : Gstyles.color.backGround}}>
    {data.hasTeam ? data.teamName : <Text style = {{color : 'red',fontSize : 20}}>Sem time</Text>}
    <Text style = {{color : Gstyles.color.secondary, fontSize : 20,}}>Criar Equipe (+)</Text>
  </View>
)

function createRows(data, columns) {
  const rows = Math.floor(data.length / columns); // [A]
  let lastRowElements = data.length - rows * columns; // [B]
  while (lastRowElements !== columns) { // [C]
    data.push({ // [D]
      id: `empty-${lastRowElements}`,
      name: `empty-${lastRowElements}`,
      empty: true
    });
    lastRowElements += 1; // [E]
  }
  return data; // [F]
}

const numberOf_columns = 4

const TeamDashboard = props => (
  <View>
    <SafeAreaView>
      <FlatList
      data = {createRows(data.teamListInfo,numberOf_columns)}
      keyExtractor = {e => e.id}
      numColumns = {numberOf_columns}
      renderItem = {({item}) =>  !item.empty ? (
        <View style = {s.listItemView}>
          <Text style = {s.listTextView}>{item.initials}</Text>
        </View>
      ) : <View style = {[s.listItemView, {backgroundColor : "transparent"}]}></View>}
      />
    </SafeAreaView>
  </View>
)
const DStudent = props => (
  <View style = {{width : '100%', height : '100%'}}>
    <View style = {{flex : 1, backgroundColor : Gstyles.color.backGround, alignContent : 'center', justifyContent : 'center'}}>
      <HeaderMain/>
    </View>

    <View style = {{flex : 6, backgroundColor : Gstyles.color.backGround}}>
      <HeaderTeamInfo/>
      <TeamDashboard/>
    </View>
  </View>
)


export default DStudent