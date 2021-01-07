import React from 'react'
import {
    View,
    TouchableOpacity
  } from "react-native";

import Gstyles from "../../../components/Gstyles";
import Header from "../../../components/Header";
import Circle from '../../../components/Circle'

const Mentorings = props => (
    <View>
        <TouchableOpacity onPress = {() => alert("OI")} style = {{width : 20, height : 20, backgroundColor : 'black'}}/>
    </View>
)

const DStudentMentoringListNew = props => (
    <View style = {{width : '100%', height : '100%', alignItems : 'center', justifyContent : 'center'}}>
        <Mentorings/>
        <Circle onPress = {() => alert('oi')} style = {{
    marginVertical : 10,
    minWidth : 70,
    maxWidth : 70,
    minHeight : 70,
    maxHeight : 70,
    borderRadius : 20,
}}/>
    </View>
)



export default DStudentMentoringListNew