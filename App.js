import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './pages/login'
import DStudent from './pages/Dashboards/DStudent'
export default function App() {
  return (
    <View style={styles.container}>
      <DStudent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    height : '100%',
    width : '100%',
  },
});
