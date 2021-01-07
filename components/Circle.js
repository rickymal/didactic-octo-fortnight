import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  TouchableOpacity
} from "react-native";

import Gstyles from './Gstyles'
const Circle = props => {

    let back = "transparent"

    let textInputInfo = null
    let opacityView = 1
    let sizeCircleStyle = {
        
    }


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
        <TouchableOpacity onPress = {props.onPress}
            style={{
                minWidth: props.constant,
                minHeight: props.constant,
                maxWidth: props.constant,
                maxHeight: props.constant,
                borderRadius: props.constant,
                backgroundColor: back,
                marginHorizontal : 10,
                borderWidth : 1,
                borderColor : Gstyles.color.primary,
                justifyContent : 'center',
                alignItems : 'center',
                opacity : opacityView,
                ...props.style,
            }}
        >{textInputInfo ? <Text style = {{fontSize : 30,}}>{textInputInfo}</Text> : null}</TouchableOpacity>
        )
}

export default Circle