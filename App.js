import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './pages/login'


import DStudentTeamList from './pages/Dashboards/Student/DStudentTeamList'
import DStudentMentoringList from './pages/Dashboards/Student/DStudentMentoringList'
import DStudentMainDashboard from './pages/Dashboards/Student/DStudentMainDashboard'
import DStudentMentoringOptionMentor from './pages/Dashboards/Student/DStudentMentoringOptionMentor'

import DMentoringMentoringList from './pages/Dashboards/Mentoring/DMentoringMentoringList'


import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

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
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home">
        <Stack.Screen name = "Home" component = {mainPage}  options = {{title : 'Home Page'}}/>
        <Stack.Screen name = "Teamlist" component = {DStudentTeamList} options = {{title : 'Team List'}} />
        <Stack.Screen name = "Mentoringlist" component = {DStudentMentoringList} options = {{title : 'Mentoring List'}} />
        <Stack.Screen name = "MentoringOptions" component = {DStudentMentoringOptionMentor} options = {{title : 'Options for mentoring'}} />
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
