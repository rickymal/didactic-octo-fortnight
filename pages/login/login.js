import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Textbox = (props) => (
    <View>
        <TextInput placeholder = {props.placeholder} passwordRules = {props.passwordRules}
        style = {props.style}/>
    </View>
)



const styles = StyleSheet.create({
    login_container : {
        flex : 1,
        justifyContent : 'center',
        paddingHorizontal : 10,
        alignItems : 'center',
        justifyContent : 'center',
    },
    buttonStyle : {
        alignItems: "center",
        backgroundColor: "#235E9D",
        padding: 10,
        width : "90%",
        margin : 10,
    },
    textboxView : {
        backgroundColor : '#EBF2F5',
        padding : 10,
        borderWidth : 0,
        margin : 10,
        flex : 1,
    },
    textBoldView : {
        fontWeight : 'bold',

    },
    textSublimeBoldView : {
        fontWeight : 'bold',
        //fontStyle : 'italic',
        textDecorationLine : 'underline',
        color : "#235E9D",
    },
    squareView : {
        height :15,
        backgroundColor : 'blue',
        flex : 1
    },
    horizontalView : {
        display : 'flex',
        flexDirection : 'column'
    },
    circleView : {
        borderRadius : 50,
        flex : 1,
        borderWidth : 2,
        width : 30,
        height : 30,   
        marginHorizontal : 10,
        borderColor : "#235E9D",

    }

})


const RadioButtonOptions = props => {
    var optionsPane = props.options
    const [pane,setPane] = useState(Array())
    console.log(optionsPane)

    return (
        <View style = {{flexDirection : "row",justifyContent : "space-between", marginTop : 5}}>
            {
                optionsPane.map(function(e,ind) {
                    return <TouchableOpacity key = {e.key} style = {styles.circleView}/>
                })
            }
        </View>        
    )
}

const TextFormInput = props => (
    <View style = {styles.horizontalView}>
        <View style = {styles.squareView}/>
        <Textbox placeholder = {props.placeholder} style = {props.style} passwordRules = {props.passwordRules}/>
    </View>
)

const options = [
    {
        key: 'pay',
        text: 'Most High Pay',
    },
    {
        key: 'performance',
        text: 'Most Perfomance',
    },
    {
        key: 'aToZ',
        text: 'A - Z',
    },
];

const Login = (props) => (
    <View style = {styles.login_container}>
        <Text style = {styles.textBoldView}>Entre com</Text>
        <RadioButtonOptions options = {options}/>
        <Text>ou</Text>
        <View style = {{width : '100%', alignItems : 'center', justifyContent : 'center'}}>
            <TextFormInput placeholder = "Email" style = {styles.textboxView}/>
            <TextFormInput placeholder = "Senha" passwordRules style = {styles.textboxView}/>
        </View>
            <TouchableOpacity style = {styles.buttonStyle}><Text>Entrar</Text></TouchableOpacity>
            <Text>ou</Text>
            <Text style = {styles.textSublimeBoldView}>Registre-se</Text>
    </View>

)

export default Login