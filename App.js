import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './pages/login'
import DStudent from './pages/Dashboards/DStudent'
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <DStudent/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height : '100%',
    width : '100%',
    margin : 0,
    padding : 0,
  },
});
