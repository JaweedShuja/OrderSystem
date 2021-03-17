import React from 'react'
import {
    View,
    Text,
    TextInput
} from 'react-native'
import Texts from '../../utils/Texts'
import styles from './style'
import Button from '../../components/Button'

export default class Login extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>
                    {`${Texts.title} Order System`}
                </Text>
                <Text style={[styles.loginText,{
                    marginTop:30
                }]}>
                    Please Login here
                </Text>
                <TextInput 
                    placeholder={'Username'}
                    style={styles.input}
                />
                <TextInput 
                    placeholder={'Password'}
                    style={styles.input}
                />
                <Button 
                    onPress={() => {}}
                    title={'LOGIN'}
                    styles={{marginTop:50}}
                />
                
            </View>
        )
    }
}