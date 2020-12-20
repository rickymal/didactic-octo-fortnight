import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './pages/login'


import DStudentTeamList from './pages/Dashboards/StudentDashboard/DStudentTeamList'
import DStudentMentoringList from './pages/Dashboards/StudentDashboard/DStudentMentoringList'
import DStudentMainDashboard from './pages/Dashboards/StudentDashboard/DStudentMainDashboard'


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <DStudentMainDashboard/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
