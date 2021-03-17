import React from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'
import Colors from '../../utils/Colors'
import Fonts from '../../utils/Fonts'

export default class Button extends React.Component{
    render(){
        return(
            <TouchableOpacity
                style={[styles.container, {
                    height:this.props.height || 45,
                    width:this.props.height || 150,
                    backgroundColor:this.props.color || Colors.themeDark,
                    borderRadius: this.props.borderRadius || 5,
                    ...this.props.styles,
                }]}
                onPress={() => {this.props.onPress()}}
            >
                <Text
                    style={{
                        color:this.props.color || Colors.white,
                        fontFamily:this.props.fontFamily || Fonts.PoppinsRegular
                    }}
                >{this.props.title}</Text>

            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
    },
})