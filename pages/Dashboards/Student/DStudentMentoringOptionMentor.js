import React from 'react'
import {View} from 'react-native'
import Profile from '../../../components/Profile'
import {Text} from 'react-native'


const Dashboard = ({ params, navigation }) => (
    <View style = {{flex : 1, backgroundColor : 'transparent'}}>
        <Text>OIOIOIOIO</Text>
        <Text>{JSON.stringify(params)}</Text>
    </View>
    )
const DStudentMentoringOptionMentor = props => {
    console.log("OPTION")
    console.log(props)

    return (
        <View style = {{width : '100%', height : '100%'}}>
            <Profile/>
            <Dashboard params = {props.route.params} navigation = {props.navigation}/>
        </View>
    )
}

export default DStudentMentoringOptionMentor