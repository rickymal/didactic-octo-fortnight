import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './pages/login'

import {useEffect} from 'react'

import DStudentTeamList from './pages/Dashboards/Student/DStudentTeamList'
import DStudentMentoringList from './pages/Dashboards/Student/DStudentMentoringList'
import DStudentMainDashboard from './pages/Dashboards/Student/DStudentMainDashboard'
import DStudentMentoringOptionMentor from './pages/Dashboards/Student/DStudentMentoringOptionMentor'
import DStudentMentoringListNew from './pages/Dashboards/Student/DStudentMentoringListNew'
import DChallengeList from './pages/Dashboards/DChallengeList'
import DMentoringMentoringList from './pages/Dashboards/Mentoring/DMentoringMentoringList'


import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import api from './services/api';

function HomeScreen() {
  return (
    <View>
      <Text>Some text</Text>
    </View>
  )
}

const Stack = createStackNavigator();


const mainPage = props => {
  
  return (
    <SafeAreaView style={styles.container}>
        <DStudentMainDashboard  navigation = {props.navigation}/>
    </SafeAreaView>
  )
}

export default function App() {
  
  useEffect(function(){
    try {
      api.get(`login/?username=rickymal&password=123456789`,)
    } catch {
      alert("Didn't work")
    }
  },[])
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home">
        <Stack.Screen name = "Home" component = {mainPage}  options = {{title : 'Home Page'}}/>
        <Stack.Screen name = "Teamlist" component = {DStudentTeamList} options = {{title : 'Team List'}} />
        <Stack.Screen name = "Mentoringlist" component = {DStudentMentoringList} options = {{title : 'Mentoring List'}} />
        <Stack.Screen name = "MentoringOptions" component = {DStudentMentoringOptionMentor} options = {{title : 'Options for mentoring'}} />
        <Stack.Screen name = "DChallengeList" component = {DChallengeList} options = {{title : 'Challenge Options'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
