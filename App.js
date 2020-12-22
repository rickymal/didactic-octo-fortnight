import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './pages/login'


import DStudentTeamList from './pages/Dashboards/Student/DStudentTeamList'
import DStudentMentoringList from './pages/Dashboards/Student/DStudentMentoringList'
import DStudentMainDashboard from './pages/Dashboards/Student/DStudentMainDashboard'

import DMentoringMentoringList from './pages/Dashboards/Mentoring/DMentoringMentoringList'

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
