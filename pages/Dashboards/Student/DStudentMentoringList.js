import Header from '../../../components/Header'
import {ScrollView, FlatList, View, SafeAreaView, StyleSheet, StatusBar, Text} from 'react-native'
import React, { useState } from "react";
import Gstyles from '../../../components/Gstyles';

const data_input_tests = Array(10).fill({
  title : "Time A",
  date : "07/09/2020",
  time : "13:30h",
  id : 1,
})

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
      flexDirection : 'row',
      justifyContent : 'space-between',
      alignContent : 'center',
    },
    title: {
      fontSize: 25,
    },
  });

const Item = ({ title, date,time, }) => (
  <View style={styles.item}>
    <Text style={[styles.title, {fontWeight : 'bold'}]}>{title}</Text>
    <Text style={[styles.title]}>{date}</Text>
    <Text style={[styles.title, {fontWeight : 'bold'}]}>{time}</Text>
  </View>
);

const MentorItem = props => (
  <View style = {[styles.item,{alignContent : 'center', justifyContent : 'center', backgroundColor : Gstyles.color.terciary}]}>
    <Text style={[styles.title, {fontWeight : 'bold'}]}>Adicionar uma mentoria</Text>
  </View>
)

const MentoringList = props => {
  

  return (
  
    <SafeAreaView style = {{backgroundColor : 'transparent', flex : 1}}>
        {props.isMentor ? <FlatList
        data = {[{}]}
        renderItem={() => <MentorItem/>}
        keyExtractor={item => 0}
      /> : null}
        <FlatList
        data={data_input_tests}
        renderItem={({item}) => <Item title = {item.title} date ={item.date} time = {item.time}/>}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>

)
}

const DStudentMentoringList = props => (
    <View style={{ width: "100%", height: "100%", }}>
        <Header title = "Mentoria"/>
        <MentoringList/>
    </View>
)

export default DStudentMentoringList
